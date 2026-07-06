const {test, expect} = require('@playwright/test')

test('test1', async({page})=>{
    await page.goto('https://demoblaze.com/index.html')
    await expect(page).toHaveTitle('STORE');
})
    test('test2',async({page})=>{
        await page.goto('https://orangehrm.com/', { waitUntil: 'domcontentloaded' })
        await expect(page).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');
    })
    