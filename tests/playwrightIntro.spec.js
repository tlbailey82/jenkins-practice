/*create test function. first import the test function
use require keyword then specify the library. From this library
import. Whatever you want to import put in the curly braces.

if you hit ctr s space it will show you all the available functions within
the curly braces. Select test.
*/

//import{test} from "@playwright/test"; the preferred way is to import it from '@playwright/test'

const{test} = require("@playwright/test");
/*after importing test function, call the test function
and pass two arguments. First argument is a string that describes what the test is doing,
and second argument it needs to be a async function that contains the test.
in the curly braces put in the page fixture.
*/
test("Simple google test",async ({page}) => {
     //test codes

     await page.goto("https://www.google.com")
     await page.waitForTimeout(3000); //wait for 3 seconds
});