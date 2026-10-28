// Android cards: the WHOLE screenshot, never cropped, proportions untouched.
//
// A 1:2.16 phone screenshot cannot both fill a card's width and keep the card
// a sane height, so the panel is a fixed square and the screenshot is scaled
// to fit inside it at full panel height. The space either side is filled with
// a blurred, darkened copy of the same screenshot so the panel still reads as
// one image rather than as dead margin.
//
// PANEL  - canvas ratio; raise H for a bigger screenshot and a taller card.
const sharp = require('C:/Users/Administrator/Documents/uk-portfollio/node_modules/sharp');
const path = require('path');
const SRC = path.join(__dirname, 'android', 'all');
const OUT = process.argv[2];
const W = Number(process.argv[3] || 1080);
const H = Number(process.argv[4] || 1080);

const JOBS = [
  ['easy3p-2.png', 'and-easy3p.jpg'],
  ['zynq-2.png', 'and-zynq.jpg'],
  ['wild-1.png', 'and-wild.jpg'],
  ['jaumocasual-1.png', 'and-csl.jpg'],
];

(async () => {
  for (const [src, dst] of JOBS) {
    const file = path.join(SRC, src);
    const bg = await sharp(file)
      .resize(W, H, { fit: 'cover', position: 'centre' })
      .blur(30)
      .modulate({ brightness: 0.4, saturation: 0.5 })
      .toBuffer();
    const fg = await sharp(file).resize({ height: H, fit: 'inside' }).png().toBuffer();
    const m = await sharp(fg).metadata();
    const info = await sharp(bg)
      .composite([{ input: fg, gravity: 'centre' }])
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(path.join(OUT, dst));
    console.log(
      String(info.size).padStart(7), dst.padEnd(16),
      'screenshot ' + m.width + 'x' + m.height + ' of ' + W + 'x' + H,
      '(' + Math.round((m.width / W) * 100) + '% of width, uncropped)'
    );
  }
})();
