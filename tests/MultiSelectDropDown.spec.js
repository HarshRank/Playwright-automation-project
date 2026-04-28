const { test, expect } = require("@playwright/test");
// const { escape } = require("node:querystring");


test('Handle dropdown list', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // select Lultiple option from multiselect drop down 
    // await page.selectOption('#colors',['Blue','Red', 'Yellow'])

    // Assertions 

    // 1) Check number of option in dropdown
    // const options = await page.locator('#colors option')
    // await expect(options).toHaveCount(5);

    // 2) check number of options in fropdown using JS array
    // const options = await page.$$('#colors option');
    // console.log('Number of option',options.length)
    // await expect(options.length).toBe(7);

    // 3) chek resence of the value in the dropdown
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blues')).toBeFalsy();
    
    await page.waitForTimeout(5000); 

})