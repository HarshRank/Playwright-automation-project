import { test, expect } from "@playwright/test";

test('handle inputbox', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Now locator will work
    const username = page.locator("//input[@placeholder='Username']");
    const Password = page.locator("//input[@placeholder='Password']");

    // await expect(username).toBeVisible();
    // await expect(username).toBeEmpty();
    // await expect(username).toBeEditable();

    await username.fill('Admin');
    await Password.fill('admin123');
    await Promise.all([
        page.waitForURL(/dashboard/),
        page.locator("//button[normalize-space()='Login']").click()
    ]);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // await page.waitForTimeout(1000);
    await page.close();
    // await page.pause()
});