const {test, expect} = require('@playwright/test');

test('Date picker handling',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.fill('#datepicker','07/22/2022')
    // await page.waitForTimeout(3000)

                    // Date picker

    const year= 2024
    const month = 'April'
    const date = 20

    await page.click('#datepicker') //opens the calender
    await page.waitForSelector('#ui-datepicker-year');
    while(true){
        const currentYear = await page.locator('#ui-datepicker-year').textContent();
        const currentMonth = await page.locator('#ui-datepicker-month').textContent();

        if(currentYear == year && currentMonth == month){
            break;

        }
        await page.locator('[title="Next"]').click()  // Next button
        await page.waitForTimeout(3000)
    }

    const dates = await page.$$("//a[@class='ui-state-default']")

    for(const DD of dates){
        if( DD.textContent()==date){
            await DD.click();
            break;
        }
    }
    await page.waitForTimeout(3000)
})