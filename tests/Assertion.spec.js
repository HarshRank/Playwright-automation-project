// Successfully working code

import { test, expect } from "@playwright/test";

test("AssertionsTest", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register", {
    waitUntil: "domcontentloaded",
  });
  await page.pause()
  // wait for actual page element
  // const registerBtn = await page.locator('#register-button');
  // await expect(registerBtn).toBeVisible();
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  await page.waitForLoadState("domcontentloaded");
  //await page.waitForTimeout(5000);

  await expect(page).toHaveTitle(/nopCommerce demo store/i);

  const logoElement = page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  const Radiobutton = await page.locator("#gender-male");
  await Radiobutton.click(); // select the radio button

  await expect(Radiobutton).toBeChecked();

  // check box

  const check_box = await page.locator(".form-check-input");
  await expect(check_box).toBeVisible();
  await check_box.click();

  // toHaveText() & toContainText()

  await expect(await page.locator("text=Your Personal Details")).toContainText(
    "Your",
  );

  // toHaveValue = input has a value

  const EmailInput = await page.locator("#Email");
  EmailInput.fill("test@gmail.com");
  await expect(EmailInput).toHaveValue("test@gmail.com");
  // await page.pause();

  // toHaveCount() find list of elements has given

  await page.waitForTimeout(3000);
  await page.goto("https://demo.nopcommerce.com/apple");

  await expect(page).toHaveURL("https://demo.nopcommerce.com/apple");
  const option = await page.locator("#products-orderby");
  await expect(option).toHaveCount(1);
  await page.pause();
});
