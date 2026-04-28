
const {test, expect } = require ('@playwright/test')

test('Built-inLocators',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

                // get by alt method

    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

                //getByPlaceholder method 

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

                // getByRole method use on like,button, url to perform

    await page.getByRole('button',{type:'submit'}).click();
    await page.pause();

                    // getByText()  

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();

    await expect(await page.getByText('manda user')).toBeVisible();

})