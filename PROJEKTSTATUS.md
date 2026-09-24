# Kochorakel – Projektstatus

## Aktueller Stand

- Version: 0.2.2
- Status: technische Migration / Testversion
- Basis: vollständig geprüfte Version 0.1.5
- Rezeptbestand: 324 Gerichte (100 Free, 224 Premium)
- Rezeptqualität: 324 von 324 Rezepten vollständig ausgearbeitet

## Ziel dieser Version

Alle Rezepte enthalten vollständige Mengen für vier Portionen, Vorbereitungs- und
Garzeit, fünf konkrete Arbeitsschritte, Schwierigkeitsgrad und einen Praxistipp.

## Nächste Schritte

1. Funktionsgleichheit mit 0.1.5 auf echten Geräten prüfen.
2. Weitere Funktionsbereiche schrittweise in eigene Module aufteilen.
3. Automatische Bereitstellung über GitHub Actions ergänzen.
4. Erst danach neue Funktionen für 0.3.0 entwickeln.

## Sicherheitsregel

Im Client darf ausschließlich der Supabase Publishable Key verwendet werden.
Secret Keys gehören niemals in dieses Projekt oder in das GitHub-Repository.
