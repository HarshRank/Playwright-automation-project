
const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");
    
    // click on login button
    await page.locator('#login2').click();

    // enter username
    await page.fill('#loginusername', 'pavanol');

                 // enter password 
    await page.fill('#loginpassword', 'test@123');
 
    // click login button
    await page.click("//button[normalize-space()='Log in']");

    // verify logout link visible
    const logoutlink = page.locator("//a[normalize-space()='Log out']");
    await expect(logoutlink).toBeVisible();

    await page.close();
});

