const {test, expect} = require("@playwright/test")

test ("Key board actions",async({page})=>{
    await page.goto('https://text-compare.com/')

                    // Approach 1
    // await page.locator('//textarea[@name="text1"]').fill("welcome to xcgh")

                    // approach 2 

    await page.type('//textarea[@name="text1"]','welcome to sdcv')
                    // Ctrl + A
    await page.keyboard.press('Control+A')

                    // Ctrl + C
    await page.keyboard.press('Control+C')

                    // Tab key

    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

                    // Ctrl +  V
    await page.keyboard.press("Control+V")
    await page.waitForTimeout(3000)

})

