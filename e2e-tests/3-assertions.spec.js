const { test, expect } = require('@playwright/test');

test('should be able to use assertions @T9e5afd58', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/vanilla-es6/');

  await expect(page.locator('.header h1')).toHaveText('todos');
  await expect(page.locator('input.new-todo')).toBeVisible();
  await expect(page.locator('.todo-list li')).toHaveCount(0);
});
