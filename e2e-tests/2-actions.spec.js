const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
});

test('basic interaction @Tb03070c3', async ({ page }) => {
  const inputBox = page.getByPlaceholder('What needs to be done?');
  const todoList = page.locator('.todo-list li');

  await inputBox.fill('Learn Playwright');
  await inputBox.press('Enter');
  await expect(todoList).toHaveText(['Learn Playwright']);

  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(todoList).toHaveCount(0);
});

test('element selectors @T185feaf1', async ({ page }) => {
  const inputBox = page.getByPlaceholder('What needs to be done?');

  await inputBox.fill('Buy milk');
  await inputBox.press('Enter');
  await expect(page.locator('.todo-list li')).toHaveCount(1);
});
