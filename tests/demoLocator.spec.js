const {test, expect } = require ('@playwright/test')

test('BuiltinLocators',async({page})=>{

    await page.goto('https://practicesoftwaretesting.com/');

    // await page.click("//span[text()='Select an occasion']");

    await page.selectOption('//select[@class="form-select"]', "name,desc");
});