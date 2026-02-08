# Philly Community Wireless Story Map (MapLibre)

This repo is a MapLibre-based scrollytelling map for Philly Community Wireless.

## Quick start

1. Update the map style in `config.js` if you want a custom basemap.
2. Serve the directory locally:

```bash
npx serve .
```

3. Open the URL printed by the server (typically http://localhost:3000).

## Config

Story content and map camera positions live in `config.js`.
See [CONFIG.md](CONFIG.md) for the full schema.

## Notes

- The default style uses MapLibre demo tiles: https://demotiles.maplibre.org/style.json
- For GitHub Pages, deploy the repo as a static site (no server required).

## Credits

Built with MapLibre GL JS and Scrollama, adapted from the Digital Democracy MapLibre storymap template.