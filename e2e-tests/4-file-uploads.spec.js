const { test, expect } = require('@playwright/test');

// This test fails on purpose: it is the sample regression used in reports.
test('should be able to upload files @Tbc3a45df', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const inputBox = page.getByPlaceholder('What needs to be done?');
  await inputBox.fill('report.csv');
  await inputBox.press('Enter');

  await expect(page.locator('.todo-list li')).toHaveText(['uploaded: report.csv']);
});
