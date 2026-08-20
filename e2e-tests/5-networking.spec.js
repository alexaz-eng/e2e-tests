const { test, expect } = require('@playwright/test');

test('should be able to read a response body', async ({ page }) => {
  const response = await page.request.get('https://api.github.com/repos/microsoft/playwright');
  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(body.name).toBe('playwright');
});

test.describe('mocked responses', () => {
  test('be able to mock responses', async ({ page }) => {
    await page.route('**/api/todos', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([{ id: 1, title: 'Mocked todo' }]),
      })
    );

    await page.goto('https://todomvc.com/examples/vanilla-es6/');
    await expect(page.locator('input.new-todo')).toBeVisible();
  });
});
