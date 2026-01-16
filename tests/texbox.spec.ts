import { test, expect } from '@playwright/test';

test.describe('Element TextBox', () => {

    test('TC_TEXTBOX_01 - Submit form with valid data', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box');

        await page.locator('#userName').fill('Nguyen Van A');
        await page.locator('#userEmail').fill('test@gmail.com');
        await page.locator('#currentAddress').fill('Ha Noi');
        await page.locator('#permanentAddress').fill('TP HCM');

        await page.locator('#submit').click();

        await expect(page.locator('#name')).toContainText('Nguyen Van A');
        await expect(page.locator('#email')).toContainText('test@gmail.com');
    });

    test('TC_TEXTBOX_02 - Submit form with invalid email', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box');

        await page.locator('#userName').fill('Nguyen Van A');
        await page.locator('#userEmail').fill('testgmail.com');
        await page.locator('#currentAddress').fill('Ha Noi');
        await page.locator('#permanentAddress').fill('TP HCM');

        await page.locator('#submit').click();

        await expect(page.locator('#userEmail')).toHaveClass(/field-error/);
    });

});
