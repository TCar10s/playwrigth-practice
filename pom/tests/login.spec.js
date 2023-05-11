import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import dotenv from 'dotenv';

dotenv.config();

test('User muts be logged in successfully', async ({ page }) => {
  await page.goto(process.env.SAUCEDEMO_URL);

  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(
    process.env.SAUCEDEMO_USERNAME,
    process.env.SAUCEDEMO_PASSWORD
  );

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
