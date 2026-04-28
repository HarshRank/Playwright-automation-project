import { test, expect } from "@playwright/test"

test('Soft assertion',async ({page})=>{
    await page.goto('https://demoblaze.com/index.html')

                    // Hardh Assertion
 
    await expect.soft(page).toHaveTitle('STORE');
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
    await expect.soft(page.locator('id=nava')).toBeVisible();
    await page.pause()
    await page.locator
})