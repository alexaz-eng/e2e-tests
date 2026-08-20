const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e-tests',
  timeout: 30 * 1000,
  retries: 0,
  workers: 1,
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    [
      '@testomatio/reporter/playwright',
      {
        apiKey: process.env.TESTOMATIO,
      },
    ],
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
