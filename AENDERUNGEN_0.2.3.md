# Änderungen in Kochorakel 0.2.3

## Timer und Kochmodus

- Schrittzeiten werden nicht mehr gleichmäßig aufgeteilt, sondern nur aus den
  tatsächlich genannten Rezeptzeiten übernommen.
- Bei Schritten ohne sinnvolle Wartezeit wird der Timerbereich vollständig
  ausgeblendet.
- Laufende Timer bleiben beim Wechsel zum nächsten Schritt aktiv und werden beim
  Zurückkehren automatisch wieder in den passenden Schritt übernommen.
- Pausierte Timer behalten bei Vor- und Zurückwechseln ihre Restzeit, bleiben
  pausiert und lassen sich anschließend mit „Fortsetzen“ weiterlaufen.
- Wiederholtes Vor- und Zurückwechseln erzeugt keine doppelten Timer mehr.
- Mehrere Timer erscheinen als kleine Kugeln nebeneinander, zeigen Gericht,
  Schritt und Restzeit und öffnen beim Antippen wieder den richtigen Kochschritt.
- Die Timergruppe lässt sich durch direktes Ziehen im oberen Bildschirmdrittel
  frei verschieben. Normales Antippen öffnet weiterhin den Timer. Die Position
  und laufende Timer bleiben bei einem Neuladen der App erhalten.

## Rezepte und Daten

- Alle 324 Rezepte und 139 Zutaten liegen jetzt in einer einzigen Rezeptdatei.
- Jedes Rezept besitzt eine stabile ID; bestehende Favoriten, Wochenpläne,
  Entdeckungen, Fotos, Kochprotokolle und Warenkorbquellen werden automatisch
  vom alten Namensformat migriert.
- 570 sinnvolle Schritt-Timer wurden aus den Rezeptanweisungen zugeordnet.
- Allergene werden pro Rezept erfasst und in der Rezeptansicht angezeigt.
- Ruhezeiten werden separat ausgewiesen und fließen korrekt in die Gesamtzeit ein.
- Sechs zu kurze Anweisungen wurden ausführlicher und eindeutiger formuliert.

## Bedienung und Veröffentlichung

- Der Wochenplan zeigt während der Auslosung „Woche wird erstellt …“ und blockiert
  Mehrfachklicks.
- Erst nach einer kleinen Ziehbewegung wird der Verschiebemodus aktiviert; ein
  normales Antippen öffnet zuverlässig den Timer.
- Overlays sperren den Hintergrund einheitlich, melden ihren Zustand korrekt an
  Bedienungshilfen und alle statischen Buttons besitzen einen eindeutigen Typ.
- Fehlende Zutaten zeigen ihren Auswahlkreis in hellem und dunklem Design wieder
  mit einem klaren Rahmen.
- Favoriten lassen sich in Ergebnis, Rezeptansicht und Favoritenliste entfernen.
  Ein älterer Cloud-Stand stellt entfernte Favoriten nicht mehr wieder her.
- Versionsanzeige und Service-Worker-Cache werden beim Build automatisch aus
  `package.json` abgeglichen.
- Ein GitHub-Actions-Workflow testet, baut und veröffentlicht die App nach jedem
  Upload auf den `main`-Branch.

## Qualitätssicherung

- 12.329 automatisierte Prüfungen für Rezepte, Mengen, Filterkombinationen,
  Ernährungsarten, IDs, Allergene, Timer, HTML-Verknüpfungen und Sicherheit.
- DOM-Smoke-Test für Anmeldung/Gaststart, Rezepte, Kochmodus, Timerfolgen mit
  Pause/Vor/Zurück, Favoriten, Cloud-Zusammenführung, Warenkorb, Fotos und Wochenplan.
- Produktions-Build erfolgreich erstellt.
