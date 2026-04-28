const { test,expect } = require("@playwright/test");

test('Handle inner frame',async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')
    const frame2 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    // frame2.locator("//input[@name='mytext3']").fill("welcome")

            // nested Frame 
    const childframes = await frame2.childFrames()
    childframes[0].locator('//*[@id="i6"]/div[3]/div').check()
    await page.waitForTimeout(3000);
})