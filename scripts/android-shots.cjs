// Android cards show the Play Store screenshot at the card full width,
// uncropped and at its own aspect ratio, so the asset is simply the screenshot
// itself. No letterbox panel and no blurred backdrop: the image IS the panel.
const sharp = require('C:/Users/Administrator/Documents/uk-portfollio/node_modules/sharp');
const path = require('path');
const SRC = path.join(__dirname, 'android', 'all');
const OUT = 'C:/Users/Administrator/Documents/uk-portfollio/src/assets/projects';

const JOBS = [
  ['easy3p-2.png', 'and-easy3p.jpg'],
  ['zynq-2.png', 'and-zynq.jpg'],
  ['wild-1.png', 'and-wild.jpg'],
  ['jaumocasual-1.png', 'and-csl.jpg'],
];

(async () => {
  for (const [src, dst] of JOBS) {
    const m = await sharp(path.join(SRC, src)).metadata();
    const info = await sharp(path.join(SRC, src))
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(path.join(OUT, dst));
    const ratio = (m.height / m.width).toFixed(3);
    console.log(
      String(info.size).padStart(7), dst.padEnd(16), '<-', src.padEnd(20),
      m.width + 'x' + m.height, '(h/w ' + ratio + ')'
    );
  }
})();
