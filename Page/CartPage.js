exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;
        this.cartRows = 'tbody#tbodyid tr';
    }

    async checkProductInCart(productName) {
        for (let attempt = 0; attempt < 5; attempt += 1) {
            const rows = this.page.locator(this.cartRows);
            const rowCount = await rows.count();

            for (let index = 0; index < rowCount; index += 1) {
                const rowText = await rows.nth(index).textContent();
                if (rowText && rowText.toLowerCase().includes(productName.toLowerCase())) {
                    return true;
                }
            }

            await this.page.waitForTimeout(1000);
        }

        return false;
    }
};