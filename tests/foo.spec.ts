// https://salmon-pond-055c7fa10.azurestaticapps.net/

import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const name = await page.innerText('body');
  expect(name).toBe('Hello World');
});