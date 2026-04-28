const {test, expect} = require('@playwright/test')
const { asyncWrapProviders } = require('node:async_hooks')
const { INSPECT_MAX_BYTES } = require('node:buffer')

test('Mouse double click',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const btnCopy = await page.locator("//button[text()='Copy Text']")

            // button double click method
    await btnCopy.dblclick()
    const Input_Value = await page.locator('#field2')
    await expect(Input_Value).toHaveValue("Hello World!")
    await page.waitForTimeout(2000)
})