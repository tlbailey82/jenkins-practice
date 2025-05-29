/*create a test group and automate the website
cydeo.com. First verify the title of the page.
Second, verify the url is correct.
*/

import{test} from '@playwright/test';

test.describe("Practice.cydeo.com", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com');
    });
    
    //after each test, wait for 3 seconds to allow the page to load.
    test.afterEach(async ({ page }) => {
       await page.waitForTimeout(3000);
    });

    test("title of page", async ({ page }) => {
        console.log(await page.title());
    
    });

    test("url of page", async ({ page }) => {
        console.log(await page.url());
    
    });


});