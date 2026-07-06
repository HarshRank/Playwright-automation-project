exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.LoginLink = '#login2';
        this.SignupLink = '#signin2';
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginButton = "//button[text()='Log in']";
        this.signUpUsernameInput = '#sign-username';
        this.signUpPasswordInput = '#sign-password';
        this.signUpButton = "//button[text()='Sign up']";
        this.loginModal = '#logInModal';
        this.signUpModal = '#signInModal';
        this.closeModalButton = '.modal-footer .btn-secondary, .modal-header .close';
    }

    async gotoLoginPage() {
        await this.page.goto('https://demoblaze.com/');
    }

    async closeModalIfVisible() {
        const modalVisible = await this.page.locator(this.loginModal).isVisible().catch(() => false);
        if (modalVisible) {
            await this.page.locator(this.closeModalButton).first().click({ force: true }).catch(() => {});
        }
    }

    async signUp(username, password) {
        await this.page.locator(this.SignupLink).click();
        await this.page.locator(this.signUpUsernameInput).fill(username);
        await this.page.locator(this.signUpPasswordInput).fill(password);

        const dialogPromise = this.page.waitForEvent('dialog', { timeout: 5000 }).catch(() => null);
        await this.page.locator(this.signUpButton).click();
        const dialog = await dialogPromise;
        if (dialog) {
            await dialog.accept();
        }

        await this.page.waitForTimeout(1000);
        await this.closeModalIfVisible();
    }

    async login(username, password) {
        await this.page.locator(this.LoginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);

        const dialogPromise = this.page.waitForEvent('dialog', { timeout: 5000 }).catch(() => null);
        await this.page.locator(this.loginButton).click();
        const dialog = await dialogPromise;
        if (dialog) {
            await dialog.accept();
        }

        await this.page.waitForTimeout(1000);
        await this.closeModalIfVisible();
        await this.page.locator('text=Log out').waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    }
};