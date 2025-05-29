import { test } from '@playwright/test';

test.describe('Test Group', () => {

    //create a beforeEach to navigate to https://practice.cydeo.com/javascript_alerts
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/javascript_alerts');
    });

  test("Regular Alert", async ({ page }) => {
    page.on('dialog', async (Alert) => {
      console.log(`Alert Message: ${Alert.message()}`);
      await page.waitForTimeout(3000);
      await Alert.accept();
    });
   
    let clickForJSAlertButton = page.locator("//button[@onclick='jsAlert()']");
    await clickForJSAlertButton.click();
    await page.waitForTimeout(3000);
  });

  test("Confirmation Alert", async ({ page }) => {

    page.on('dialog', async (Alert) => {
      console.log(`Alert Message: ${Alert.message()}`);
      await page.waitForTimeout(3000);
      await Alert.dismiss();
    });

    let clickForJSConfirmAlertButton = page.locator("//button[@onclick='jsAlert()']");
    await clickForJSConfirmAlertButton.click();

    await page.waitForTimeout(3000);

  });


  test("Prompt Alert", async ({ page }) => {

    page.on('dialog', async (Alert) => {
      console.log(`Alert Message: ${Alert.message()}`);
      await page.waitForTimeout(3000);
      await Alert.accept("CYDEO");
      
    });
    
    let clickForJSPromptAlertButton = page.locator("//button[@onclick='jsPrompt()']");
    await clickForJSPromptAlertButton.click();

    await page.waitForTimeout(3000);

  });

});