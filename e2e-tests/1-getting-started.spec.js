const { test, expect } = require('@playwright/test');

test('basic test @T5f7d34fa', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await expect(page).toHaveTitle(/TodoMVC/);
});
