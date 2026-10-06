# Änderungen in Kochorakel 0.2.3

## Timer und Kochmodus

- Schrittzeiten werden nicht mehr gleichmäßig aufgeteilt, sondern nur aus den
  tatsächlich genannten Rezeptzeiten übernommen.
- Schritte ohne sinnvolle Wartezeit zeigen bewusst „Kein Timer nötig“.
- Laufende Timer bleiben beim Wechsel zum nächsten Schritt aktiv.
- Mehrere Timer erscheinen als kleine Kugeln nebeneinander, zeigen Gericht,
  Schritt und Restzeit und öffnen beim Antippen wieder den richtigen Kochschritt.
- Die Kugeln lassen sich durch langes Drücken neu anordnen und bleiben bei einem
  Neuladen der App erhalten.

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
- Versionsanzeige und Service-Worker-Cache werden beim Build automatisch aus
  `package.json` abgeglichen.
- Ein GitHub-Actions-Workflow testet, baut und veröffentlicht die App nach jedem
  Upload auf den `main`-Branch.

## Qualitätssicherung

- 12.325 automatisierte Prüfungen für Rezepte, Mengen, Filterkombinationen,
  Ernährungsarten, IDs, Allergene, Timer, HTML-Verknüpfungen und Sicherheit.
- DOM-Smoke-Test für Anmeldung/Gaststart, Rezepte, Kochmodus, Timer, Favoriten,
  Warenkorb, Fotos und Wochenplan.
- Produktions-Build erfolgreich erstellt.
