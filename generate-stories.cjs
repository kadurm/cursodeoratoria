const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: null
  });
  
  const page = await browser.newPage();
  
  // Set viewport for Stories
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 2 });
  
  const htmlPath = path.resolve(__dirname, 'stories.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 2000));

  const outputDir = path.resolve(__dirname, 'Arquivos', 'Novos Criativos');
  
  const stories = [
    { id: '#story-1-1', name: 'story-carrossel-1-1.jpeg' },
    { id: '#story-1-2', name: 'story-carrossel-1-2.jpeg' },
    { id: '#story-1-3', name: 'story-carrossel-1-3.jpeg' },
    { id: '#story-4-1', name: 'story-carrossel-4-1.jpeg' },
    { id: '#story-4-2', name: 'story-carrossel-4-2.jpeg' },
    { id: '#story-4-3', name: 'story-carrossel-4-3.jpeg' }
  ];

  for (const item of stories) {
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
