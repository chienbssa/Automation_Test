import { test, expect } from '@playwright/test';

test.describe('Element RadioButton', () => {

    test('TC_RADIO_01 - Select Yes radio button', async ({ page }) => {
        await page.goto('https://demoqa.com/radio-button');

        await page.locator('label[for="yesRadio"]').click();

        await expect(page.locator('.text-success')).toHaveText('Yes');
    });

    test('TC_RADIO_02 - Select Impressive radio button', async ({ page }) => {
        await page.goto('https://demoqa.com/radio-button');

        await page.locator('label[for="impressiveRadio"]').click();

        await expect(page.locator('.text-success')).toHaveText('Impressive');
    });

    test('TC_RADIO_03 - Verify No radio button is disabled', async ({ page }) => {
        await page.goto('https://demoqa.com/radio-button');

        await expect(page.locator('#noRadio')).toBeDisabled();
    });

});

