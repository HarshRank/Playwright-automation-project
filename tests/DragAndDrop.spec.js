const {test, expect} = require('@playwright/test')

test('Drag and drop',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const drag = await page.locator('//div[@id="draggable" and @class="ui-widget-content ui-draggable ui-draggable-handle"]')
    const drop = await page.locator("//div[@id='droppable']")

                // Approach 1
    // await drag.hover()
    // await page.mouse.down()

    // await drop.hover()
    // await page.mouse.up()

                // Aproach 2 

    await drag.dragTo(drop)  //shorter method
    await page.waitForTimeout(3000)
})