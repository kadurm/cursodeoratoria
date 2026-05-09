const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: null
  });
  
  const page = await browser.newPage();
  const outputDir = path.resolve(__dirname, 'Arquivos', 'Novos Criativos');

  // GENERATE FEED
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
  const feedHtmlPath = path.resolve(__dirname, 'creatives-taiobeiras.html');
  await page.goto(`file://${feedHtmlPath}`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 2000));
  
  const feedElement = await page.$('#creative-taiobeiras');
  if (feedElement) {
    await feedElement.screenshot({
      path: path.join(outputDir, 'feed-taiobeiras.jpeg'),
      type: 'jpeg',
      quality: 95
    });
    console.log('Generated feed-taiobeiras.jpeg');
  }

  // GENERATE STORY
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 2 });
  const storyHtmlPath = path.resolve(__dirname, 'stories-taiobeiras.html');
  await page.goto(`file://${storyHtmlPath}`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 2000));
  
  const storyElement = await page.$('#story-taiobeiras');
  if (storyElement) {
    await storyElement.screenshot({
      path: path.join(outputDir, 'story-taiobeiras.jpeg'),
      type: 'jpeg',
      quality: 95
    });
    console.log('Generated story-taiobeiras.jpeg');
  }

  await browser.close();
})();
