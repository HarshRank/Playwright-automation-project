const {test, expect} = require("@playwright/test")

test("page screenshots",async ({page})=>{
    await page.goto('https:/n;/demo.opencart.com/en-gb?route=common/home')
    await page.waitForTimeout(2000)
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Homepage.png'})
     
})

test.only("full page screenshots",async({page})=>{
    await page.goto('https://demo.opencart.com/en-gb?route=common/home')
    await page.screenshot({path:'tests/Screenshots'+Date.now()+'Fullpage.png',fullPage:true})
})

test("Element screenshots",({page})=>{
    
})