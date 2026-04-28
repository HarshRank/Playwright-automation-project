// import { test,expect } from "@playwright/test";

// test("Handle CheckBox", async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
//     await username.fill('Admin');
//     await Password.fill('admin123');
//     await Promise.all([
//         page.waitForURL(/dashboard/),
//         page.locator("//button[normalize-space()='Login']").click()
//     ]);
//                 // Single Chekbox

//     await page.locator('input[type="checkbox"]').nth(1).check();
//     await expect(await page.locator('input[type="checkbox"]').nth(1)).toBeChecked(); 
//     await page.pause();
// }) 


import { test, expect } from "@playwright/test";

test("Handle CheckBox", async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');

    await Promise.all([
        page.waitForURL(/dashboard/),
        page.locator('button[type="submit"]').click()
    ]);

    await page.locator('//span[text()="PIM"]').click();

    await page.waitForSelector('.oxd-table-card');

    //  Click using XPath (fixed)
    const checkboxIcon = page.locator("(//i[@class='oxd-icon bi-check oxd-checkbox-input-icon'])[1]");
    await checkboxIcon.click();

    // Verify using actual checkbox input
    const actualCheckbox = page.locator("(//input[@type='checkbox'])[2]");
    await expect(actualCheckbox).toBeChecked();

    await page.waitForTimeout(1000);
});