# Änderungen in Kochorakel 0.2.4

## Persönliches Essensprofil

- Ernährungsweise im Konto: Alles, vegetarisch oder vegan.
- Allergien und Unverträglichkeiten lassen sich einzeln auswählen.
- Zusätzlich können beliebige Zutaten gesucht und dauerhaft ausgeschlossen werden.
- Die Einstellungen werden im Gastprofil lokal und bei angemeldeten Konten über
  die bestehende Profilsynchronisierung gespeichert.

## Einheitliche Filterung

- Das Essensprofil gilt automatisch beim Auslosen, in der Rezeptbibliothek und
  im Wochenplan.
- Bei vegetarischer Auswahl erscheinen keine Fleisch- oder Fischgerichte.
- Bei veganer Auswahl erscheinen ausschließlich vegan gekennzeichnete Gerichte;
  tierische Zutaten werden außerdem in der Vorratsauswahl ausgeblendet.
- Nicht passende Favoriten bleiben gespeichert, werden unter dem aktiven
  Essensprofil aber nicht angeboten.
- Nicht bestätigte, unpassende Wochenplan-Einträge werden beim Ändern des
  Essensprofils entfernt. Bereits als gekocht bestätigte Einträge bleiben als
  Verlauf erhalten.

## Aufgeräumte Oberfläche

- Die mehrfach vorhandenen Ernährungsfilter wurden von Kochen, Rezepten und
  Wochenplan entfernt.
- Die drei täglichen Hauptbereiche „Heute“, „Woche“ und „Rezepte“ liegen in
  einer festen, iPhone-sicheren Navigation am unteren Bildschirmrand.
- Oben stehen ein kompakter Level-Kreis mit blauem XP-Fortschrittsring,
  Warenkorb und Menü.
- Konto, Favoriten sowie Fortschritt und Erfolge sind als ruhige Listeneinträge
  im Menü erreichbar.
- Zeit, Gerichtstyp und Essensprofil liegen in einer kompakten Filterzeile, die
  nur bei Bedarf geöffnet wird.
- Ein Tippen auf den Level-Kreis öffnet die ausführliche Fortschritts- und
  Erfolgsansicht; die alte XP-Leiste auf der Startseite wurde entfernt.
- Zwischen „Heute“, „Woche“ und „Rezepte“ kann horizontal gewischt werden. Eine
  klare Bewegungsgrenze schützt vertikales Scrollen, Eingabefelder, Overlays und
  die iPhone-Zurückgeste am linken Bildschirmrand.
- Kopfbereich, Menü und Navigation verwenden einheitliche, ruhige Liniensymbole;
  Rezept-Emojis bleiben zur Wiedererkennung erhalten.
- Der aktive Navigationspunkt wird nur noch dezent blau markiert. Konto,
  Favoriten und Fortschritt erhalten im Menü sparsame Funktionsfarben.
- Der aktuelle Wochentag ist im gültigen Wochenplan dezent hervorgehoben.
- Der Auslose-Button ist jetzt vollbreit, etwas eckiger und nutzt einen
  zurückhaltenderen Schatten.
- Darstellung und Premium wurden im Menü in einklappbare Bereiche zusammengefasst.
- Große Karten, Rezeptschritte und Ergebnisflächen sind etwas eckiger und nutzen
  weniger starke Schatten; kleine Status- und Auswahlchips bleiben abgerundet.
- Leere Trefferlisten erklären, dass neben den aktuellen Filtern auch das
  Essensprofil geprüft werden sollte.
- Ein Sicherheitshinweis macht klar, dass die App bei Allergien nicht die Prüfung
  von Produktverpackungen und möglichen Spuren ersetzt.

## Qualitätssicherung

- 12.342 automatisierte Prüfungen für vegane und vegetarische Ergebnislisten,
  Allergenfilter, vermiedene Zutaten, Wochenplan, Rezeptbibliothek,
  Profilspeicherung, Cloud-Zusammenführung, Level-Kreis und die neue Navigation.
- Zusätzliche Interaktionstests prüfen Wischen vorwärts und zurück, vertikales
  Scrollen, Overlay-Sperren und den Schutz der linken iPhone-Randgeste.
- Bestehende Timer-, Favoriten-, Warenkorb- und Rezepttests bleiben aktiv.
- Produktions-Build und GitHub-Actions-Veröffentlichung werden erneut geprüft.
