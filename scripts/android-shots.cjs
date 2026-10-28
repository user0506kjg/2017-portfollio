// Portrait phone screenshots in a 2:1 card: show the screenshot whole, at full
// card height, over a blurred and darkened copy of itself so the frame fills.
const sharp = require('C:/Users/Administrator/Documents/uk-portfollio/node_modules/sharp');
const path = require('path');
const SRC = path.join(__dirname, 'android', 'all');
const W = 1200, H = 630;

const JOBS = [
  ['easy3p-2.png', 'and-easy3p.jpg'],
  ['zynq-2.png', 'and-zynq.jpg'],
  ['wild-1.png', 'and-wild.jpg'],
  ['jaumocasual-1.png', 'and-csl.jpg'],
];

async function build(src, dst, outDir, inset) {
  const file = path.join(SRC, src);
  const bg = await sharp(file)
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .blur(28)
    .modulate({ brightness: 0.42, saturation: 0.55 })
    .toBuffer();
  const fgH = H - inset * 2;
  const fg = await sharp(file).resize({ height: fgH, fit: 'inside' }).png().toBuffer();
  const info = await sharp(bg)
    .composite([{ input: fg, gravity: 'centre' }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(outDir, dst));
  return info;
}

(async () => {
  const outDir = process.argv[2];
  const inset = Number(process.argv[3] || 18);
  for (const [src, dst] of JOBS) {
    const i = await build(src, dst, outDir, inset);
    console.log(String(i.size).padStart(7), dst, '<-', src);
  }
})();
