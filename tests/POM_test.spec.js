import { test, expect } from '@playwright/test';
import { LoginPage } from '../Page/LoginPage';
import { HomePage } from '../Page/HomePage';
import { CartPage } from '../Page/CartPage';

test('test', async ({ page }) => {
    const login = new LoginPage(page);
    const username = `playwright${Date.now()}`;
    const password = 'Test@1234';

    await login.gotoLoginPage();
    await login.signUp(username, password);
    await login.login(username, password);

    const home = new HomePage(page);
    await home.addProductToCart('Samsung galaxy s6');
    await home.gotoCart();

    const cart = new CartPage(page);
    const status = await cart.checkProductInCart('Samsung galaxy s6');
    expect(status).toBe(true);
});