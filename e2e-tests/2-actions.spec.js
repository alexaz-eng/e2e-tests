const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://todomvc.com/examples/vanilla-es6/');
});

test('basic interaction', async ({ page }) => {
  const inputBox = page.locator('input.new-todo');
  const todoList = page.locator('.todo-list');

  await inputBox.fill('Learn Playwright');
  await inputBox.press('Enter');
  await expect(todoList).toHaveText('Learn Playwright');
  await page.locator('.filters >> text=Completed').click();
  await expect(todoList).not.toHaveText('Learn Playwright');
});

test('element selectors', async ({ page }) => {
  const inputBox = page.locator('input.new-todo');

  await inputBox.fill('Buy milk');
  await inputBox.press('Enter');
  await expect(page.locator('.todo-list li')).toHaveCount(1);
});
