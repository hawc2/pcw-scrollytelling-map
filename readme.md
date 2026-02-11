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

## Adding a new chapter

To add a new chapter (tile) to the story, add an object to the `chapters` array in `config.js`. Each chapter requires the following fields:

```js
{
    id: '11',                    // Unique string identifier
    alignment: 'right',          // Card position: 'left', 'right', 'center', or 'full'
    hidden: false,               // Set true to trigger map movement without showing a card
    title: 'Your Chapter Title',
    image: './images/photo.jpg', // Path to an image (place files in the images/ folder)
    description: 'Text describing this location and what the reader should know.',
    location: {
        center: [-75.1350, 39.9830],  // [longitude, latitude]
        zoom: 15.00,                   // Map zoom level (1 = world, 18 = building)
        pitch: 45.00,                  // Camera tilt in degrees (0 = top-down, 60 = oblique)
        bearing: 0.00                  // Map rotation in degrees (0 = north up)
    },
    mapAnimation: 'flyTo',       // 'flyTo' for sweeping transitions, 'easeTo' for subtle pans
    rotateAnimation: false,      // Set true to slowly rotate the map on this chapter
    spinGlobe: false,            // Set true for a globe-spinning effect
    mapInteractive: false,       // Set true to let the user drag/zoom the map on this chapter
    callback: '',                // Optional: name of a JS function to call on enter
    onChapterEnter: [],          // Optional: layer opacity changes on enter
    onChapterExit: []            // Optional: layer opacity changes on exit
}
```

**Tips:**
- Use [Google Maps](https://maps.google.com) or [geojson.io](https://geojson.io) to find longitude/latitude coordinates for a location.
- `flyTo` creates a smooth, curved zoom transition between chapters — best for larger geographic jumps. `easeTo` is a linear pan — best for small nearby movements.
- `onChapterEnter` and `onChapterExit` accept arrays of layer visibility objects, e.g. `[{ layer: 'my-layer', opacity: 1, duration: 300 }]`. These are useful if you add custom GeoJSON layers via `sources.js`.

## Notes

- The default style uses CARTO Dark Matter tiles. Other free options include `positron-gl-style` (light) and `voyager-gl-style` (colored).
- For GitHub Pages, deploy the repo as a static site (no server required).

## Credits

Built with [MapLibre GL JS](https://maplibre.org/) and [Scrollama](https://github.com/russellsamora/scrollama), adapted from the [Digital Democracy MapLibre storymap template](https://github.com/digidem/maplibre-storymap).

Special thanks to [Felipe Valdez](https://felipevaldez.com/) for his [tutorial on creating interactive map-based stories with MapLibre](https://felipevaldez.com/tutorials/tutorial4/). For a detailed, step-by-step guide on how to build your own MapLibre scrollytelling map, see his [workshop](https://felipevaldez.com/storytelling_maplibre_workshop/).