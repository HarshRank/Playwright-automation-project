const { test, expect } = require("@playwright/test");
// const { log } = require("node:console");
// const { stat } = require("node:fs");

test("Handle Dropdown", async ({ page }) => {

    // await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.locator('input[name="username"]').fill("Admin");
    // await page.locator('input[name="password"]').fill('admin123');
    // await page.locator('button[type="submit"]').click();

    // // Wait for login to complete
    // await page.waitForURL('**/dashboard/**');

    // Navigate to Personal Details page
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Correct assertion
    // const maritalStatus = page.locator('//div[@class="oxd-select-text-input" and text()="Married"]');
    // await expect(maritalStatus).toBeTruthy();
    // await page.locator('id=country').selectOption({index:5})
    // await page.selectOption("#country",'uk')

                // check number of option in dropdown list
    // const option = await page.locator('#country option');
    // await expect(option).toHaveCount(10);

                            // another method to find list

    // const content = await page.locator('#country').textContent();
    // await expect(content.includes('India')).toBeTruthy();

                        // find the list using loop

    const options = await page.$$('#country option')
    let status = false;

    for(const option of options){
        // console.log(await optiones.textContent());
        let value = await option.textContent();
        if(value.includes('France')){
        status=true;
        break;
    }
}
expect(status).toBeTruthy();
    await page.waitForTimeout(5000);
});