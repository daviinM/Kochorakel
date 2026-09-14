# Kochorakel

Kochorakel ist eine mobile Rezept- und Wochenplan-App mit Gastmodus, Fortschritt, Favoriten, Einkaufswagen, Premium-Funktionen und Supabase-Konten.

## Enthalten

- lokaler Gastmodus mit `localStorage`
- Registrierung und Anmeldung per E-Mail/Passwort
- E-Mail-Bestätigung und Passwort-Reset
- Cloud-Synchronisierung des Kochfortschritts
- automatische Übernahme vorhandener Gastdaten beim ersten Login
- Profilname und Abmeldung
- serverseitiger Premium-Status
- geschützter Adminbereich für Nutzer, Premium und Sperrstatus
- installierbare iPhone-/Android-Web-App mit eigenem Symbol und Offline-Grundfunktion

## Datenbank vorbereiten

1. Supabase öffnen.
2. **SQL Editor** auswählen.
3. Den vollständigen Inhalt von [supabase_setup.sql](supabase_setup.sql) ausführen.
4. Unter **Authentication → URL Configuration** eintragen:
   - Site URL: `http://localhost:5500/kochorakel.html`
   - Redirect URLs: `http://localhost:5500/**` und `http://127.0.0.1:5500/**`

Das in der SQL-Datei hinterlegte Admin-Konto ist `davinmerkel77@gmail.com`. Das Passwort wird ausschließlich in Supabase Auth verwaltet und gehört nicht in dieses Repository.

## Online und auf dem iPhone installieren

Online: [Kochorakel öffnen](https://daviinm.github.io/Kochorakel/)

Auf dem iPhone die Seite in Safari öffnen, unten auf **Teilen** und anschließend auf **Zum Home-Bildschirm** tippen. Danach lässt sich Kochorakel über das neue App-Symbol starten.

## Lokal unter Windows testen

PowerShell im Repository-Ordner öffnen und starten:

```powershell
py -m http.server 5500
```

Danach im Browser öffnen:

```text
http://localhost:5500/kochorakel.html
```

Falls Python nicht installiert ist, kann die Datei alternativ mit der VS-Code-Erweiterung **Live Server** auf Port 5500 gestartet werden.

## Schnelltest

1. Ohne Anmeldung würfeln und die Seite neu laden: Gastfortschritt bleibt lokal erhalten.
2. Mit dem Admin-Konto anmelden: Im Kontomenü erscheint **Adminbereich öffnen**.
3. Ein zweites Konto registrieren: Es erscheint im Adminbereich als normaler Nutzer.
4. Premium beim zweiten Konto aktivieren, dort neu anmelden und den Wochenplan öffnen.
5. Konto sperren und erneut anmelden: Der Zugriff wird abgelehnt.

## Sicherheit

Im Browser wird nur der öffentliche Supabase Publishable Key verwendet. Secret- oder Service-Role-Schlüssel dürfen niemals in HTML, Repository oder Browsercode gespeichert werden.
