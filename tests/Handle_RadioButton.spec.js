import { test, expect } from "@playwright/test";

test('handle inputbox', async ({ page }) => {

    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    await page.waitForTimeout(1000);
    // await page.locator('//div[6]//div[1]//div[1]//div[1]//div[1]//label[1]//span[1]//i[1]')
    await page.check("//div[5]//div[1]//div[1]//div[1]//div[1]//label[1]//span[1]//i[1]");
    await expect(await page.locator("//div[5]//div[1]//div[1]//div[1]//div[1]//label[1]//span[1]//i[1]")).toBeChecked();
    await expect(await page.locator("//div[5]//div[1]//div[1]//div[1]//div[1]//label[1]//span[1]//i[1]").isChecked()).toBeTruthy();
    // await page.pause();
    await page.waitForTimeout(1000);
   
})