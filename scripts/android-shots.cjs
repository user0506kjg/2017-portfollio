// Keep the screenshots full-width, but bring the card height back down by
// giving the panel a square ratio instead of the screenshot's 1:2.16.
// Crop position is tuned per image to keep the part that carries the meaning.
const sharp = require('C:/Users/Administrator/Documents/uk-portfollio/node_modules/sharp');
const path = require('path');
const SRC = path.join(__dirname, 'android', 'all');
const OUT = process.argv[2];
const SIDE = Number(process.argv[3] || 1080);

// topFrac = where the crop window starts, as a fraction of the slack above it
const JOBS = [
  ['easy3p-2.png', 'and-easy3p.jpg', 0.10],
  ['zynq-2.png', 'and-zynq.jpg', 0.30],
  ['wild-1.png', 'and-wild.jpg', 0.05],
  ['jaumocasual-1.png', 'and-csl.jpg', 0.08],
];

(async () => {
  for (const [src, dst, topFrac] of JOBS) {
    const file = path.join(SRC, src);
    const m = await sharp(file).metadata();
    const side = m.width;                    // square window = full width
    const slack = m.height - side;
    const top = Math.round(slack * topFrac);
    const info = await sharp(file)
      .extract({ left: 0, top, width: side, height: side })
      .resize(SIDE, SIDE)
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(path.join(OUT, dst));
    console.log(String(info.size).padStart(7), dst.padEnd(16), 'crop top', String(top).padStart(4), 'of', slack);
  }
})();
