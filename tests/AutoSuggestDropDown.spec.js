const { test, expect } = require("@playwright/test");

test('Auto siggest', async({page})=>{
    await page.goto('https://www.redbus.in/')    

    await page.locator('#scr').fill('Delhi');
    await page.waitForSelector('//input[@id="destinput"]')
    const fromCityOptions = await page.$$('//input[@id="destinput"]')
    for(let option of romCityOptions){
        await option.textContent()
        console.log(value)
    }

    // await page.waitForTimeout(2000);
})