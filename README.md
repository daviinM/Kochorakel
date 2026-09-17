# Kochorakel 0.2.0

Technische Testversion auf Basis von Kochorakel 0.1.5.

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
- `public`: PWA-Dateien und App-Symbole

## Wichtig

Die App nicht mehr per Doppelklick auf `index.html` testen. Für die Entwicklung
`npm run dev` verwenden; für GitHub Pages wird der erzeugte `dist`-Ordner
beziehungsweise der automatische Build benötigt.
