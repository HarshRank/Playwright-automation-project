const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");
        await expect(page).toHaveTitle('STORE');

    
    await page.locator('#login2').click();

    await page.fill('#loginusername', 'pavanol');

     await page.fill('#loginpassword', 'test@123');
 
    await page.click("//button[normalize-space()='Log in']");

});