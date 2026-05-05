const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: null // Let the element size dictate
  });
  
  const page = await browser.newPage();
  
  // Set a large viewport to ensure everything renders properly
  await page.setViewport({ width: 2560, height: 10000, deviceScaleFactor: 2 });
  
  const htmlPath = path.resolve(__dirname, 'creatives.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  // Wait for Tailwind CDN and fonts to load completely
  await page.evaluate(() => document.fonts.ready);
  // Additional wait for images
  await new Promise(r => setTimeout(r, 2000));

  const outputDir = path.resolve(__dirname, 'Arquivos', 'Novos Criativos');
  
  // If the directory doesn't exist, this script will fail, but we know it does.
  
  const creatives = [
    { id: '#creative-1', name: 'carrossel-1-1.jpeg' },
    { id: '#creative-1-2', name: 'carrossel-1-2.jpeg' },
    { id: '#creative-1-3', name: 'carrossel-1-3.jpeg' },
    { id: '#creative-4', name: 'carrossel-4-1.jpeg' },
    { id: '#creative-4-2', name: 'carrossel-4-2.jpeg' },
    { id: '#creative-4-3', name: 'carrossel-4-3.jpeg' }
  ];

  for (const item of creatives) {
    const element = await page.$(item.id);
    if (element) {
      await element.screenshot({
        path: path.join(outputDir, item.name),
        type: 'jpeg',
        quality: 95
      });
      console.log(`Generated ${item.name}`);
    } else {
      console.error(`Element ${item.id} not found.`);
    }
  }

  await browser.close();
})();
