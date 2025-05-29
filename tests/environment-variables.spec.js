import { test } from '@playwright/test';

test('@env-test Testing environment variables', async ({ page }) => {
    console.log(process.env.PRACTICE_USERNAME);
    console.log(process.env.PRACTICE_PASSWORD);

    console.log(`Username: ${process.env.PRACTICE_USERNAME}`);
    console.log(`Password: ${process.env.PRACTICE_PASSWORD}`);
  
});

test('Bypass authentication by encoding the credentials base64 format', async ({ page }) => {
    let encodedCredential = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString('base64');
  
    await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredential}`});
  
    page.goto('https://practice.cydeo.com/basic_auth');
  
    await page.waitForTimeout(3000);
  
  });

/*to create the environment variable. go the the search bar
search for >user settings. Select user settings json file.
*/
