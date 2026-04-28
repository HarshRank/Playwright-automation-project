const {test, expect} = require ("@playwright/test")

test("Home page test", async ({page})=>{
            // Login => Home page => Logout
    await page.goto('https://demoblaze.com/index.html') 

                    // login
    await page.locator("#login2").click();
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill("test@123")
    await page.locator("//button[normalize-space()='Log in']").click()

                // Home page
     await page.waitForSelector('.hrefch');
    const products = await page.$$('.hrefch')
    await expect (products).toHaveLength(9)

                        // Add product to the cart

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()
    page.on('dialog',async dialog =>{
        expect(dialog.message()).toContain("product added")
        await dialog.accept()
    })
    await page.waitForTimeout(2000)
    
                        // logout
    await page.locator('#logout2').click()
    await page.waitForTimeout(2000)

})

