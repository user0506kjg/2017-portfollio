# Project image credits

All six images are **CC0 / public domain**, sourced via [Openverse](https://openverse.org)
with the licence filter set to `cc0,pdm`. CC0 requires no attribution, but the
provenance is recorded here so you can verify or replace any of them.

| File | Title | Source | ID | Licence |
|---|---|---|---|---|
| `rag-pipelines.jpg` | Books Knowledge | StockSnap | `2VENF09ZOW` | CC0 1.0 |
| `agent-workflows.jpg` | Futuristic Technology | StockSnap | `YWJQBD3VIX` | CC0 1.0 |
| `llm-evaluation.jpg` | Futuristic Data | StockSnap | `U4TACBBYTL` | CC0 1.0 |
| `backend-services.webp` | Computer server room | rawpixel | — | CC0 1.0 |
| `data-pipelines.jpg` | Motion Abstract | StockSnap | `D91B1NOVLJ` | CC0 1.0 |
| `system-integration.jpg` | Technology Network | StockSnap | `PN7RVGLUUD` | CC0 1.0 |

StockSnap originals: `https://cdn.stocksnap.io/img-thumbs/960w/<ID>.jpg`

## Why these

Each image is a plain visual metaphor for the case study it sits above:

- **RAG pipelines** — shelves of books, i.e. the external knowledge corpus a RAG
  system retrieves from
- **Agent workflows** — branching circuit pathways, i.e. a multistep process
  routed across tools
- **LLM evaluation** — a chart rising over a field of data, i.e. measured output
  quality
- **Backend services** — a data centre aisle
- **Data pipelines** — streams of light flowing in parallel
- **System integration** — a graph of connected nodes

## How they're processed

Images are imported through `astro:assets`, so Astro (via sharp) resizes them
to a 400w/800w `srcset` and converts them to WebP at build time. The ~2.3 MB of
source files ship as roughly 5–40 KB per variant.

Each is rendered desaturated (`grayscale contrast-110 brightness-75`) under a
`bg-cyber-blue/45 mix-blend-color` layer. That duotone is what makes six photos
from different photographers read as one set in the site's cyan palette — the
tint eases back on hover. If you swap an image in, it will be treated the same
way, so it does not need to be blue to fit.

## Replacing one

Drop a new file into this folder and point the matching `image` field in
`src/data/profile.ts` at its filename (update `alt` too). No other changes
needed — the component resolves images by filename.
