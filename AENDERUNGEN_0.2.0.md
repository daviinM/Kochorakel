# Änderungen in Kochorakel 0.2.0

## Technische Umstellung

- Die bisherige einzelne HTML-Datei wurde in ein Vite-Projekt überführt.
- Oberfläche, Design, Anwendungslogik und Rezeptdaten sind getrennt.
- Supabase wird als feste Projektabhängigkeit gebündelt und nicht mehr von
  einem externen CDN nachgeladen.
- Ein reproduzierbarer Produktions-Build wurde eingerichtet.
- GitHub Actions testet und veröffentlicht die App nach Änderungen automatisch.
- Der bisherige Link `kochorakel.html` leitet weiterhin zur App weiter.

## Funktionsumfang

Der sichtbare Funktionsumfang entspricht Version 0.1.5. Diese Version dient
bewusst der technischen Stabilisierung und enthält keine neuen App-Funktionen.

## Prüfung

- 224 Gerichte, davon 75 Free und 149 Premium
- 118 bekannte Zutaten
- 4.594 automatisierte Daten-, Logik- und Strukturprüfungen ohne Fehler
- zusätzlicher DOM-Smoke-Test für Rezeptansicht, Favoriten, Warenkorb,
  Wochenplan, Kochmodus, Timer, Fotos und Profilspeicherung
- erfolgreicher Vite-Produktions-Build

## Upload auf GitHub

Alle Projektdateien außer `node_modules` und `dist` hochladen. Danach in
GitHub unter **Settings → Pages → Build and deployment → Source** einmalig
**GitHub Actions** auswählen.
