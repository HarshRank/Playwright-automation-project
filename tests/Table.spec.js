const { expect, test } = require("@playwright/test");
const { match } = require("assert");
const { log } = require("console");

test("handling table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = await page.locator("#productTable");

  // total number of rows & Columns
  const columns = await table.locator("thead tr th");
  console.log("number of columns:", await columns.count());
  expect(await columns.count()).toBe(4);

  const rows = await table.locator("tbody tr");
  console.log("number of rows is:", await rows.count());
  expect(await rows.count()).toBe(5);

  // 2) select checkbox for smartphone prodcuct from table

  // const matchedRows = rows.filter({
  //     has: page.locator('td'),
  //     hasText: 'Smartwatch'
  // })
  // await matchedRows.locator('input').check()

  // await selectProduct(rows, page, 'Tablet')
  // await selectProduct(rows, page, 'Laptop')
  // await selectProduct(rows, page, 'Smartphone')
  //  await page.waitForTimeout(3000)

  //) print all product details using loop
  /*for (let i = 0; i < (await rows.count()); i++) {
    const row = rows.nth(i);
    const tableData = row.locator("td");
    
    for (let j = 0; j < (await tableData.count()) - 1; j++) {
      console.log(await tableData.nth(j).textContent());
    }
  }*/

  // await page.waitForTimeout(4000)

  // 5) read data from allm the page in the table
  const pages = await page.locator(".pagination li  a");
  console.log("number of pages in the table", await pages.count());

  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }
    for (let i = 0; i < (await rows.count()); i++) {
      const row = rows.nth(i);
      const tableData = row.locator("td");

      for (let j = 0; j < (await tableData.count()) - 1; j++) {
        console.log(await tableData.nth(j).textContent());
      }
    }
    await page.waitForLoadState('networkidle')
  }
  await page.waitForTimeout(3000)
});

// 3) for select multiple checkbox by re-usable function

async function selectProduct(rows, page, name) {
  const matchedRows = rows.filter({
    has: page.locator("td"),
    hasText: name,
  });
await matchedRows.locator("input").check();
}

