const {test, expect} = require("@playwright/test")

test("mouse right click",async ({page}) => {

     await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

     const button = await page.locator("//span[text()='right click me']")
     // right click button
     await button.click({button: 'right'})

    //  await button.click(button);
    await page.waitForTimeout(3000)
     

})
