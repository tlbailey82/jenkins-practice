import {test } from '@playwright/test';

test ('Google test', async ({ page }) => { 
  // navigate to https:www.google.com
  await page.goto('https://www.google.com');

//pause for 3 seconds
  await page.waitForTimeout(3000);

  
});
