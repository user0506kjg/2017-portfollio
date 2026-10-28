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

## Client project images — NOT CC0

The four images below are **each site's own brand asset**, taken from the live
site to represent delivered work. They are not stock photography and are not
public domain; the rights belong to the respective businesses.

| File | Taken from | Source URL |
|---|---|---|
| `theayurved.jpg` | The Ayurved | `theayurved.in/wp-content/uploads/2026/04/8-1.png` |
| `onlymassage.jpg` | Onlymassage | `onlymassage.io/og-image.png` (Open Graph preview) |
| `secretspa.jpg` | Secret Spa | `secretspa.co.uk/og/secret-spa-home.jpg` (Open Graph preview) |
| `dogsushi.jpg` | DogSushi | `dogsushi.app/icon-512x512.png` (app icon, centred on the app's own `#09090b` background) |

Showing a client's branding to illustrate work you delivered for them is normal
portfolio practice, but it is not a public-domain licence. If any client objects,
or if a working relationship ends, replace the image. Keep in mind the logos and
photography may also be trademarked.

## `wp-*.jpg` — also client assets, NOT CC0

Each of these is taken from the site it represents, under the same terms as the
table above: the rights belong to those businesses, and logos and artwork may be
trademarked.

| File | Taken from | What it shows |
|---|---|---|
| `wp-vibrantpharma.jpg` | vibrantpharma.com | Laboratory glassware (`chemical_synthesis-banner.jpg`) |
| `wp-bertolla.jpg` | bertolla.com | *Epic Battle* album cover (`images/10.jpg`) |
| `wp-goprogarage.jpg` | goprogaragedoorservice.com | A fitted garage door (`IMG_2934-1.jpg`) |
| `wp-urogyn.jpg` | urogyn.se | The clinic entrance (`2024/07/2.png`) |
| `wp-pulsesante.jpg` | pulse-sante.fr | Product UI (`intro-large-img-1`) |
| `wp-aesthetika.jpg` | aesthetikadentalstudio.co.uk | The practice team and signage |
| `wp-klens.jpg` | klensvision.com | Laparoscope in use (`Klens_ProblemImage`) |
| `wp-cascade.jpg` | hivcarecascade.com | The CASCADE wordmark (`V3/static/images/logo.png`) |

Photographs are cropped to 1200×630. Logos and UI artwork are letterboxed onto a
dark panel instead, so nothing is cut off.

An earlier version of this set used generated typographic panels — site name and
domain on a grid — because several of these sites publish no Open Graph preview
image. Those were replaced with real imagery pulled from the sites themselves.

To swap one, drop a 1200×630 file into this folder and point the project's
`image` field at it.

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
