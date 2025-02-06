// example.test.js
const { test, expect } = require('@playwright/test');
const exp = require('constants');
const { text } = require('stream/consumers');

test('Check the Page Load Title of google', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.google.com');
  
  // Verify that the page title is correct
  await expect(page).toHaveTitle('Google');
  
});

test( 'Login Check ', async ({ page }) => {
    //Validation message Check
    await page.goto('https://demo.skyselect.com/db');
    await expect(page).toHaveTitle('Login : SkySelect');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.locator('#home')).toMatchAriaSnapshot(`
      - heading "Welcome back!" [level=1]
      - textbox "Email"
      - textbox "Password"
      - text: Invalid email or password
      - img
      - text: Remember me
      - button "Log in"
      - link "Recover your password"
      - button "Sign up as supplier"
      - link "Use single sign-on"
      - button "Sign up"
      `);

    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('12345ABCD');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').press('ControlOrMeta+a');
    await page.getByPlaceholder('Email').fill('salesuserdummy@airindia.com');
    await page.getByPlaceholder('Email').press('Tab');
    await page.getByPlaceholder('Password').fill('Test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.locator('#home')).toMatchAriaSnapshot(`
      - heading "Welcome back!" [level=1]
      - textbox "Email": salesuserdummy@airindia.com
      - textbox "Password": /Test@\\d+/
      - img
      - text: Invalid email or password
      - img
      - text: Remember me
      - button "Log in"
      - link "Recover your password"
      - button "Sign up as supplier"
      - link "Use single sign-on"
      - button "Sign up"
      `);
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').press('ControlOrMeta+a');
    await page.getByPlaceholder('Email').fill('sales@airindia.com');
    await page.getByPlaceholder('Password').click();
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByText('OverviewRequestsAwardingOrdersSuppliersAnalyticsNewAir India')).toBeVisible();

}); 

test('Create RFQ', ({page}) => {
  
})

