exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.addToCartBtn = "//a[@class='btn btn-success btn-lg' and normalize-space()='Add to cart']";
        this.cart = "//a[@class='nav-link' and normalize-space()='Cart']";
    }

    async addProductToCart(productName) {
        await this.page.locator(`//a[contains(@class, 'hrefch') and normalize-space()='${productName}']`).click({ force: true });

        const dialogPromise = this.page.waitForEvent('dialog', { timeout: 5000 }).catch(() => null);
        await this.page.locator(this.addToCartBtn).click({ force: true });
        const dialog = await dialogPromise;
        if (dialog) {
            await dialog.accept();
        }
    }

    async gotoCart() {
        await this.page.locator(this.cart).click();
    }
};