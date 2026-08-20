const { test, expect } = require('@playwright/test');

test('should be able to upload files', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  await page.setInputFiles('#file-upload', 'fixtures/report.csv');
  await page.locator('#file-submit').click();

  await expect(page.locator('#uploaded-files')).toHaveText('report.csv');
});
