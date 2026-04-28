const { test, expect } = require("@playwright/test");

test('Alert with OK', async({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/")
            // Enable alert handling & dailog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        // expect(dialog.message()).toContain('Hello guys')
        await dialog.accept(); //close by using ok button
        // await dialog.dismiss();  // close bu using cancel button 
        
    })

    await page.click('//button[@id="alertBtn"="Alert"]');
    // page.waitForTimeout(3000);
})
 