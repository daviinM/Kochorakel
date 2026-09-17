# Kochorakel – Projektstatus

## Aktueller Stand

- Version: 0.2.0
- Status: technische Migration / Testversion
- Basis: vollständig geprüfte Version 0.1.5
- Funktionsumfang: gegenüber 0.1.5 unverändert

## Ziel dieser Version

Die bisherige Einzeldatei wurde in ein Vite-Projekt überführt. Oberfläche,
Rezepte und Anwendungslogik sind jetzt getrennt. Dadurch können kommende
Funktionen gezielter entwickelt und getestet werden.

## Nächste Schritte

1. Funktionsgleichheit mit 0.1.5 auf echten Geräten prüfen.
2. Weitere Funktionsbereiche schrittweise in eigene Module aufteilen.
3. Automatische Bereitstellung über GitHub Actions ergänzen.
4. Erst danach neue Funktionen für 0.3.0 entwickeln.

## Sicherheitsregel

Im Client darf ausschließlich der Supabase Publishable Key verwendet werden.
Secret Keys gehören niemals in dieses Projekt oder in das GitHub-Repository.
