const sharp = require('sharp');
const path = require('path');

const sizes = {
  png: [16, 32, 64, 128, 256, 512],
  ico: [16, 32, 48, 64, 128, 256],
  icns: [16, 32, 64, 128, 256, 512, 1024]
};

async function generateIcons() {
  const svgPath = path.join(__dirname, '../assets/icons/icon.svg');
  const outputDir = path.join(__dirname, '../assets/icons');

  // 生成 PNG
  for (const size of sizes.png) {
    await sharp(svgPath)
      .resize(size, size)
      .png()
      .toFile(path.join(outputDir, `icon-${size}.png`));
  }

  // 生成 ICO
  const icoSizes = sizes.ico.map(size => ({
    width: size,
    height: size
  }));
  await sharp(svgPath)
    .resize(256, 256)
    .toFile(path.join(outputDir, 'icon.ico'));

  // 生成 ICNS
  const icnsSizes = sizes.icns.map(size => ({
    width: size,
    height: size
  }));
  await sharp(svgPath)
    .resize(1024, 1024)
    .toFile(path.join(outputDir, 'icon.icns'));
}

generateIcons().catch(console.error); 