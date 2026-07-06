// const {test, expect} = require("@playwright/test")

// test("page screenshots",async ({page})=>{
//     await page.goto('https://demo.opencart.com/en-gb?route=common/home')
//     await page.waitForTimeout(5000)
//     await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Homepage.png'})
     
// })

// test("full page screenshots",async({page})=>{
//     await page.goto('https://demo.opencart.com/en-gb?route=common/home')
//     await page.screenshot({path:'tests/Screenshots'+Date.now()+'Fullpage.png',fullPage:true})
// }) 

const { test, expect } = require("@playwright/test");

// test.skip("Page Screenshot", async ({ page }) => {

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
//     await page.waitForTimeout(5000);
//     // Take normal screenshot
//     await page.screenshot({
//         path: 'tests/Screenshots/' + Date.now() + 'Homepage.png'
//     });

// });

// test.skip("Full Page Screenshot", async ({ page }) => {

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

//     await page.waitForTimeout(5000);
//     // Take full page screenshot
//     await page.screenshot({
//         path: 'tests/Screenshots/' + Date.now() + 'FullPage.png',
//         fullPage: true
//     });

// });

test.only("Element Screenshot", async ({ page }) => {

    await page.goto('https://demo.opencart.com/en-gb?route=common/home');

    // Wait until page fully loads
    await page.waitForTimeout(5000);

    // Locate element
    const logo = page.locator('img[title="Your Store"]');

    // Take element screenshot
    await logo.screenshot({
        path: 'tests/screenshots/' + Date.now() + '_Logo.png'
    });

});