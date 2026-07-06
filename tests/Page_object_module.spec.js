exports.LoginPage = 
class LoginPage {
    constructor(page){
        this.page = page;
        this.LoginLink = '#login2'
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginButton = "//button[text()='Log in']";
    }
    async gotoLoginPage(){
        await this.goto('https://demoblaze.com/');
    }
    async login(username, password){
        await this.page.locator(this.LoginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
        
    }
}

import {test, expect} from '@playwright/test'
import { PassThrough } from 'node:stream'

test('test',async({page})=>{
    await page.goto('https://demoblaze.com/')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[text()='Log in']").click()


})
