import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { URLS, CREDENTIALS } from '../data/constants';

test('User muts be logged in successfully', async ({ page }) => {
  await page.goto(URLS.SAUCEDEMO);

  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(
    CREDENTIALS.SAUCEDEMO_USERNAME,
    CREDENTIALS.SAUCEDEMO_PASSWORD
  );

  // await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); // expect(page.getByText('Products'));
  await expect(page.getByText('PRODUCTS')).toBeVisible(); // expect(page.getByText('Products'));
});
