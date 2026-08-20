const { test, expect } = require('@playwright/test');

test('should be able to use assertions @T9e5afd58', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();
  await expect(page.getByPlaceholder('What needs to be done?')).toBeVisible();
  await expect(page.locator('.todo-list li')).toHaveCount(0);
});
