# Kochorakel 0.2.2

Technische Testversion mit 324 vollständig ausgearbeiteten Rezepten. Jedes Rezept
enthält Mengen für vier Portionen, Zeiten, fünf Schritte und einen Praxistipp.

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

## Aufbau

- `index.html`: Oberfläche und Dialoge
- `src/styles.css`: vollständiges Design
- `src/main.js`: Anwendungslogik
- `src/data/recipes.js`: Rezept- und Zutatendaten
- `src/data/new-recipes-0.2.1.js`: 100 neue Rezepte aus Version 0.2.1
- `src/data/curated-recipes-0.2.2.js`: vollständige Überarbeitung der älteren Rezepte
- `public`: PWA-Dateien und App-Symbole

## Wichtig

Die App nicht mehr per Doppelklick auf `index.html` testen. Für die Entwicklung
`npm run dev` verwenden; für GitHub Pages wird der erzeugte `dist`-Ordner
beziehungsweise der automatische Build benötigt.
