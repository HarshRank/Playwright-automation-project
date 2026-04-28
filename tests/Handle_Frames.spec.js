const {test, expect } = require("@playwright/test");
test('Frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
            // Total Frames

    const frame = await page.frames()
    console.log("Number of frames",frame.length);

                     // if name is present use this method .
    // const var = await page.frame('name'); 

    // Approach 1: using name or url of the page
    // await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    // await frame1.fill('[name="mytext1"]','helloooo')

                // approach 2: using frame locator
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    inputBox.fill('heloooo')
    await page.waitForTimeout(3000);
    // await page.pause()


})

