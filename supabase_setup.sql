-- Kochorakel: Supabase schema, profile trigger and row-level security
-- Safe to run again in the Supabase SQL Editor.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  display_name text not null default '',
  role text not null default 'user' check (role in ('user', 'admin')),
  is_premium boolean not null default false,
  is_suspended boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_app_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.profiles
    where id = (select auth.uid())
      and role = 'admin'
      and is_suspended = false
  );
$$;

create or replace function public.is_active_user()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.profiles
    where id = (select auth.uid())
      and is_suspended = false
  );
$$;

revoke all on function public.is_admin() from public;
revoke all on function public.is_active_user() from public;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.is_active_user() to authenticated;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, email, display_name, role, is_premium)
  values (
    new.id,
    lower(new.email),
    coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1)),
    case when lower(new.email) = 'davinmerkel77@gmail.com' then 'admin' else 'user' end,
    case when lower(new.email) = 'davinmerkel77@gmail.com' then true else false end
  )
  on conflict (id) do nothing;

  insert into public.user_app_data (user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  return new;
end;
$$;

revoke all on function public.handle_new_user() from public;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create or replace function public.update_my_profile(p_display_name text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_active_user() then
    raise exception 'Konto ist nicht aktiv';
  end if;

  update public.profiles
  set display_name = left(trim(coalesce(p_display_name, '')), 50),
      updated_at = now()
  where id = (select auth.uid());
end;
$$;

revoke all on function public.update_my_profile(text) from public;
grant execute on function public.update_my_profile(text) to authenticated;

create or replace function public.admin_set_user_access(
  p_user_id uuid,
  p_is_premium boolean,
  p_is_suspended boolean
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_admin() then
    raise exception 'Keine Administratorrechte';
  end if;

  if p_user_id = (select auth.uid()) and p_is_suspended then
    raise exception 'Das eigene Administratorkonto kann nicht gesperrt werden';
  end if;

  update public.profiles
  set is_premium = p_is_premium,
      is_suspended = p_is_suspended,
      updated_at = now()
  where id = p_user_id;
end;
$$;

revoke all on function public.admin_set_user_access(uuid, boolean, boolean) from public;
grant execute on function public.admin_set_user_access(uuid, boolean, boolean) to authenticated;

alter table public.profiles enable row level security;
alter table public.user_app_data enable row level security;

revoke all on table public.profiles from anon, authenticated;
revoke all on table public.user_app_data from anon, authenticated;
grant select on table public.profiles to authenticated;
grant select, insert, update on table public.user_app_data to authenticated;

drop policy if exists "Profil lesen" on public.profiles;
create policy "Profil lesen"
on public.profiles for select to authenticated
using (id = (select auth.uid()) or public.is_admin());

drop policy if exists "Eigene Daten lesen" on public.user_app_data;
create policy "Eigene Daten lesen"
on public.user_app_data for select to authenticated
using (user_id = (select auth.uid()) and public.is_active_user());

drop policy if exists "Eigene Daten anlegen" on public.user_app_data;
create policy "Eigene Daten anlegen"
on public.user_app_data for insert to authenticated
with check (user_id = (select auth.uid()) and public.is_active_user());

drop policy if exists "Eigene Daten speichern" on public.user_app_data;
create policy "Eigene Daten speichern"
on public.user_app_data for update to authenticated
using (user_id = (select auth.uid()) and public.is_active_user())
with check (user_id = (select auth.uid()) and public.is_active_user());
