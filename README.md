# Simple Dashboard

This example shows a minimal dashboard similar to **n8n** that allows you to add ECharts widgets backed by MongoDB collections. Drag-and-drop layout is handled by **Gridstack.js**.

## Setup

1. Install dependencies

```bash
npm install
```

2. Seed example data (requires local MongoDB running at `mongodb://localhost:27017`)

```bash
npm run seed
```

3. Start the server

```bash
npm start
```

4. Open <http://localhost:3000> in your browser. Click **Add Chart** to create a new chart widget. Use **Export** to download the dashboard layout as `dashboard.json` and **Import** to load it back. Each widget pulls data from the `sampledata` collection and renders a bar chart with ECharts.

## Files

- `server.js` – Express server providing a `/data/:collection` API and serving static files.
- `public/index.html` – Front-end using Gridstack.js for layout and ECharts for rendering.
- `seed.js` – Seeds the `sampledata` collection with example documents.

## Exporting and Importing

Use the **Export** button to download the current dashboard layout as a JSON file. You can later restore the dashboard by clicking **Import** and selecting the previously saved file.
