import { test, expect } from '@playwright/test';

test('iframe test', async ({ page }) => {

  await page.goto("https://practice.cydeo.com/iframe");

  let myFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");

  let elementInsideTheFrame = myFrame.locator("//p[text()='Your content goes here.']");

  await elementInsideTheFrame.clear();

  await page.waitForTimeout(3000);

  await elementInsideTheFrame.fill("Hello CYDEO!");

  
});