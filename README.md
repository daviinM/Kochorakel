# Kochorakel 0.2.3

Technische Testversion mit 324 vollständig ausgearbeiteten Rezepten. Jedes Rezept
enthält Mengen für vier Portionen, Arbeits-, Gar- und gegebenenfalls Ruhezeiten,
vier bis acht konkrete Schritte, passende Schritt-Timer, Allergenhinweise und
einen Praxistipp.

## Lokal starten

Voraussetzung: Node.js 20.19 oder neuer.

```bash
npm install
npm run dev
```

Vite zeigt anschließend die lokale Adresse an.

## Produktionsversion erstellen

```bash
npm run build
npm run preview
```

Die veröffentlichbaren Dateien liegen danach im Ordner `dist`.

## GitHub Pages

Das Projekt enthält einen automatischen Workflow. Im GitHub-Repository unter
**Settings → Pages → Build and deployment → Source** einmalig **GitHub Actions**
auswählen. Danach wird jeder erfolgreiche Stand auf `main` automatisch getestet,
gebaut und veröffentlicht.

Für ein Update müssen anschließend nur die entpackten Projektdateien ins
Repository hochgeladen beziehungsweise per Git übertragen werden. Der Ordner
`.github` muss mit hochgeladen werden; er enthält den Workflow.

## Aufbau

- `index.html`: Oberfläche und Dialoge
- `src/styles.css`: vollständiges Design
- `src/main.js`: Anwendungslogik
- `src/data/recipes.js`: einzige kanonische Quelle für Rezepte und Zutaten
- `public`: PWA-Dateien und App-Symbole
- `scripts/sync-version.mjs`: gleicht sichtbare Version und PWA-Cache automatisch ab
- `scripts/build-canonical-recipes.mjs`: Wartungsskript für Rezept-IDs, Timer und Allergene
- `.github/workflows/deploy.yml`: automatischer GitHub-Pages-Build

## Wichtig

Die App nicht mehr per Doppelklick auf `index.html` testen. Für die Entwicklung
`npm run dev` verwenden; für GitHub Pages wird der erzeugte `dist`-Ordner
beziehungsweise der automatische Build benötigt.
