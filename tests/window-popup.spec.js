import { expect, test } from '@playwright/test';

test('Window pop-up practice', async ({ page }) => {
  //creating event listener for monitoring window pop-ups.
  let promiseNewPageEvent = page.waitForEvent("popup");

  await page.goto("https://practice.cydeo.com/windows");

  await page.click("text='Click Here'");//this triggers the popup event.

  //await page.waitForTimeout(3000);

  let newPage = await promiseNewPageEvent;//await for the promise to resolve.

  expect(newPage).toHaveTitle("New Window");
  expect(page).toHaveTitle("Windows");

  await page.bringToFront();
  let firstWindowElement = page.getByText("Opening a new window");
  await expect(firstWindowElement).toBeVisible();

  //await page.waitForTimeout(3000);

  //to locate the element from second page. use the new page instance
  //then call the locator method getByText on the new page.

  await newPage.bringToFront();

  let secondWindowElement = newPage.getByText("New window");
  await expect(secondWindowElement).toBeVisible();

  //await page.waitForTimeout(3000);

  


});