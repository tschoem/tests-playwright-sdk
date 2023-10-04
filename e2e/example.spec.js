// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('two tests', () => {

  test('homepage has expected title', async ({ page }) => {
    await page.goto('https://www.bstackdemo.com');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/StackDemo/);
    await page.waitForTimeout(3000);

  });

  test('signin link functions', async ({ page }) => {
    await page.goto('https://www.bstackdemo.com/signin');

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();

    await page.getByText('Select Username').click();
    await page.getByText('demouser', { exact: true }).click();

    await page.getByText('Select Password').click();
    await page.getByText('testingisfun99', { exact: true }).click();

    await page.getByRole('button', { name: 'Log In' }).click();

    await page.waitForTimeout(3000);

    await expect(page.getByText('demouser')).toBeVisible();
    await page.waitForTimeout(3000);

  });

});
