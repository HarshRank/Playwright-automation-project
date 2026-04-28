const { test, expect } = require("@playwright/test");

// test("Upload files", async ({ page }) => {

//     await page.goto('https://the-internet.herokuapp.com/upload');

//     // Upload file (correct path)
//     await page.setInputFiles('#file-upload', 'C:/Users/HP/Downloads/march_report.pdf');

//     // Click upload button
//     await page.click('#file-submit');

//     // Validation
//     await expect(page.locator('#uploaded-files')).toHaveText('march_report.pdf');

                // test multiple files

    test.only('Multiple files ',async ({page})=>{
        await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
        await page.locator('#filesToUpload')
        .setInputFiles(['tests/march_report.pdf',
                        'tests/123456.pdf']);
        await page.waitForTimeout(3000);
        expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('march_report.pdf')
        expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('123456.pdf')
        await page.waitForTimeout(3000);

        await page.locator('#filesToUpload').setInputFiles([])
        await page.waitForTimeout(3000);

    })
    // await page.waitForTimeout(3000);
//});