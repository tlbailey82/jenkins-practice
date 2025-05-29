import { test } from '@playwright/test';

test.describe('Test Group', () => {
    //create beforeEach to navigate to https://practice.cydeo.com/
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com');
    });
  test("Check(): checks the radio button and check boxes if they haven't been checked yet", async ({ page }) => {
    //let checkboxesLink = page.locator("'text=Checkboxes'");this way does not work.
    let checkboxesLink = page.getByText("Checkboxes")
    await checkboxesLink.click();

    //pause for 3 seconds
  
    let checkbox1 = page.locator("//input[@id='box1']");

    await checkbox1.check();

    ;

    
  });

  test("Uncheck", async ({ page }) => {
    let checkboxesLink = page.getByText("Checkboxes")
    await checkboxesLink.click();

    let checkbox2 = page.locator("#box2");
    

    await checkbox2.uncheck();

    
  });

  test("Select", async ({ page }) => {
    
    let dropdownLink = page.getByText("Dropdown");
    await dropdownLink.click();
    
    

    let simpleDropdown = page.locator("//select[@id='dropdown']");

    //await simpleDropdown.selectOption("1");
    //await simpleDropdown.selectOption({label: "Option 1"});
    await simpleDropdown.selectOption({ index: 1});

    
  });
});