# Project image credits

All six images are **CC0 / public domain**, sourced via [Openverse](https://openverse.org)
with the licence filter set to `cc0,pdm`. CC0 requires no attribution, but the
provenance is recorded here so you can verify or replace any of them.

| File | Title | Source | ID | Licence |
|---|---|---|---|---|
| `rag-pipelines.jpg` | Books Library   | StockSnap | `GTWPBBTRRN` | CC0 1.0 |
| `agent-workflows.jpg` | Robot Technology      | StockSnap | `WUBMLJRYEK` | CC0 1.0 |
| `llm-evaluation.jpg` | Futuristic Data | StockSnap | `U4TACBBYTL` | CC0 1.0 |
| `backend-services.webp` | Computer server room | rawpixel | — | CC0 1.0 |
| `data-pipelines.jpg` | Hard drives     | StockSnap | `2J3PLNMO9M` | CC0 1.0 |
| `system-integration.jpg` | Technology Network | StockSnap | `PN7RVGLUUD` | CC0 1.0 |
| `ecommerce-1.jpg` | Ecommerce Shopping | StockSnap | `RZWM4T2UAD` | CC0 1.0 |
| `ecommerce-2.jpg` | Shop Store | StockSnap | `I93PW8NE0F` | CC0 1.0 |
| `ecommerce-3.jpg` | Fashion Clothes | StockSnap | `ZN97ZIF3ZU` | CC0 1.0 |
| `ecommerce-4.jpg` | Window Shopping | StockSnap | `E1WZHWID6J` | CC0 1.0 |

StockSnap originals: `https://cdn.stocksnap.io/img-thumbs/960w/<ID>.jpg`

## Why these

Each image shows a literal subject, so the topic is readable at a glance rather
than needing the caption to explain it:

- **RAG pipelines** — shelves of books: the external knowledge corpus a RAG
  system retrieves from
- **Agent workflows** — a humanoid service robot: an agent acting on its own
- **LLM evaluation** — a chart rising over a field of data: measured output quality
- **Backend services** — a data centre aisle of server racks
- **Data pipelines** — an array of hard disk drives and controller boards
- **System integration** — a graph of connected nodes
- **E-commerce 1–4** — card-and-laptop checkout, a shop "Open" sign, retail
  clothing racks, and a shopper with bags. These sit on placeholder project
  slots; swap any of them when the real project content lands.

An earlier set leaned on abstract imagery (light streaks for data pipelines,
geometric circuitry for agents). Those read as decoration rather than subject
matter and were replaced.

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
