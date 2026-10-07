# Kochorakel – Projektstatus

## Aktueller Stand

- Version: 0.2.4
- Status: Essensprofil / Testversion
- Basis: vollständig geprüfte Version 0.2.3
- Rezeptbestand: 324 Gerichte (100 Free, 224 Premium)
- Rezeptqualität: 324 von 324 Rezepten vollständig ausgearbeitet und in einer Datei zusammengeführt
- Datenmodell: stabile Rezept-IDs mit automatischer Migration alter Profilnamen
- Qualitätssicherung: mehr als 12.300 Daten-/Codeprüfungen plus erweiterter DOM-Smoke-Test und Produktions-Build

## Ziel dieser Version

Ein zentrales Essensprofil im Konto für vegetarische oder vegane Ernährung,
Allergien, Unverträglichkeiten und einzelne vermiedene Zutaten. Die Auswahl wirkt
automatisch beim Auslosen, in der Rezeptbibliothek und im Wochenplan.

## Nächste Schritte

1. Version auf dem echten iPhone prüfen, besonders Profilbedienung, Timer im Hintergrund und Safe Areas.
2. Mengen- und Maßeinheiten als weitere Kontoeinstellung planen.
3. Weitere vegane Süßspeisen ergänzen.
4. Weitere Funktionsbereiche schrittweise in eigene Module aufteilen.

## Sicherheitsregel

Im Client darf ausschließlich der Supabase Publishable Key verwendet werden.
Secret Keys gehören niemals in dieses Projekt oder in das GitHub-Repository.
