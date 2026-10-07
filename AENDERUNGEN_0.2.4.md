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
- Auf der Startseite führt nur noch eine kompakte Zeile direkt zum Essensprofil.
- Leere Trefferlisten erklären, dass neben den aktuellen Filtern auch das
  Essensprofil geprüft werden sollte.
- Ein Sicherheitshinweis macht klar, dass die App bei Allergien nicht die Prüfung
  von Produktverpackungen und möglichen Spuren ersetzt.

## Qualitätssicherung

- Automatisierte Prüfungen für vegane und vegetarische Ergebnislisten,
  Allergenfilter, vermiedene Zutaten, Wochenplan, Rezeptbibliothek,
  Profilspeicherung und Cloud-Zusammenführung.
- Bestehende Timer-, Favoriten-, Warenkorb- und Rezepttests bleiben aktiv.
- Produktions-Build und GitHub-Actions-Veröffentlichung werden erneut geprüft.
