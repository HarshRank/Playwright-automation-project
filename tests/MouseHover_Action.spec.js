const {test, expect } = require("@playwright/test");

test('Mouse hover effect action',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')

    const username = page.locator("//input[@placeholder='Username']");
    const Password = page.locator("//input[@placeholder='Password']");

    await username.fill('Admin');
    await Password.fill('admin123');
    await Promise.all([
        // page.waitForURL(/dashboard/),
        page.locator("//button[normalize-space()='Login']").click()
    ]);
     page.locator("//span[normalize-space()='Job']").click()
    const desktop =await page.locator("//a[normalize-space()='']")
    const employee_Status = await page.locator("//a[normalize-space()='Employment Status']")
    await employee_Status.hover()
    // await page.waitForTimeout(3000)
})
