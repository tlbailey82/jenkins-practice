/*
First test case: Verify that there are exactly 50 elements
within the <ul> tag.

Second test case: Verify that each of the 50 link elements within the 
<ul> tag is visible & clickable.

Third test case: Verify that each of the 50 link elements within
the <ul> tag has a href attribute.
*/

import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {

  let elements;//this is declared at the group level to reuse the array. Initializing array outside the test cases

    //create beforeEach to navigate to https://practice.cydeo.com/
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com');
        elements = await page.locator("//ul[@class='list-group']//a").all();  //initializing elements array outside the test cases.
        
    });

  test("Verify that there are exactly 50 elements within the <ul> tag.", async ({ page }) => {
    //this array is used in all the test cases. so create it
    //at the test group level to reuse the array. Initializing array outside the test cases
    //let elements = await page.locator("//ul[@class='list-group']//a").all();

    expect(elements.length).toBe(50);
    //expect(elements.length).toBeGreaterThanOrEqual(20);
  });

  test("Verify that each of the 50 link elements within the <ul> tag is visible & clickable", async ({ page }) => {
    
    for(let e of elements) {
      await expect(e).toBeVisible();
      expect(await e.isVisible()).toBeTruthy();

      await expect(e).toBeEnabled();
      //expect(await e.isEnabled()).toBeTruthy();
    }

  });

  test("Verify that each of the 50 link elements within the <ul> tag has a href attribute", async ({ page }) => {
    
    for(let e of elements) {
      await expect(e).toHaveAttribute("href");
      console.log(e.getAttribute("href"));
    }
  
});
});
