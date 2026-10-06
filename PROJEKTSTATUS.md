# Kochorakel – Projektstatus

## Aktueller Stand

- Version: 0.2.3
- Status: technische Migration / Testversion
- Basis: vollständig geprüfte Version 0.2.2
- Rezeptbestand: 324 Gerichte (100 Free, 224 Premium)
- Rezeptqualität: 324 von 324 Rezepten vollständig ausgearbeitet und in einer Datei zusammengeführt
- Datenmodell: stabile Rezept-IDs mit automatischer Migration alter Profilnamen
- Qualitätssicherung: 12.325 Daten-/Codeprüfungen plus DOM-Smoke-Test und Produktions-Build

## Ziel dieser Version

Realistische Schritt-Timer, mehrere weiterlaufende Timer-Kugeln, Allergenhinweise,
stabile Profildaten und ein automatischer GitHub-Pages-Workflow.

## Nächste Schritte

1. Version auf dem echten iPhone prüfen, besonders Timer im Hintergrund und Safe Areas.
2. Allergien und Unverträglichkeiten im Profil als persönliche Filter ergänzen.
3. Weitere vegane Süßspeisen ergänzen.
4. Weitere Funktionsbereiche schrittweise in eigene Module aufteilen.

## Sicherheitsregel

Im Client darf ausschließlich der Supabase Publishable Key verwendet werden.
Secret Keys gehören niemals in dieses Projekt oder in das GitHub-Repository.
