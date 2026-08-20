const { test, expect } = require('@playwright/test');

test('basic test @T5f7d34fa', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/vanilla-es6/');
  await expect(page).toHaveTitle(/TodoMVC/);
});
