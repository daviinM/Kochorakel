# Änderungen in Kochorakel 0.2.1

## 100 neue Rezepte

- 25 neue Free-Rezepte und 75 neue Premium-Rezepte
- insgesamt jetzt 324 Gerichte: 100 Free und 224 Premium
- jedes neue Rezept enthält Mengen für vier Portionen
- jedes neue Rezept enthält Vorbereitungszeit, Garzeit und Schwierigkeitsgrad
- jedes neue Rezept enthält fünf konkrete Arbeitsschritte und einen Praxistipp
- sechs neue Zutaten im Zutatenverzeichnis: Tomatenmark, Thymian, Kümmel,
  Frühlingszwiebeln, Dill und Vanillezucker

## Qualitätssicherung

- alle Rezeptnamen auf Eindeutigkeit geprüft
- alle Zutaten-IDs und Mengen geprüft
- vegane und vegetarische Kennzeichnungen automatisch geprüft
- Free-/Premium-Verteilung und alle Filterkombinationen geprüft
- vollständiger Funktions- und DOM-Smoke-Test der App ausgeführt
- Produktions-Build und ZIP-Archiv geprüft

## Technische Änderung

Die neuen Rezepte liegen gesammelt in `src/data/new-recipes-0.2.1.js` und werden
von `src/data/recipes.js` eingebunden. Dadurch bleibt der bestehende Datenbestand
übersichtlich und künftige Rezeptpakete können separat ergänzt werden.
