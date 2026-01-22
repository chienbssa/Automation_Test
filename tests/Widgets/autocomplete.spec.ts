import { test, expect } from '@playwright/test';

test.describe('Widgets - Auto Complete', () => {

    test('TC_AUTOCOMPLETE_01 - Select multiple values', async ({ page }) => {
        await page.goto('https://demoqa.com/auto-complete');

        const multiInput = page.locator('#autoCompleteMultipleInput');

        await multiInput.fill('Re');
        await page.locator('.auto-complete__option').first().click();

        await multiInput.fill('Bl');
        await page.locator('.auto-complete__option').first().click();

        await expect(page.locator('.auto-complete__multi-value')).toHaveCount(2);
    });

    test('TC_AUTOCOMPLETE_02 - Remove selected value', async ({ page }) => {
        await page.goto('https://demoqa.com/auto-complete');

        const multiInput = page.locator('#autoCompleteMultipleInput');

        await multiInput.fill('Re');
        await page.locator('.auto-complete__option').first().click();

        await page.locator('.auto-complete__multi-value__remove').click();

        await expect(page.locator('.auto-complete__multi-value')).toHaveCount(0);
    });

    test('TC_AUTOCOMPLETE_03 - Select single value', async ({ page }) => {
        await page.goto('https://demoqa.com/auto-complete');

        const singleInput = page.locator('#autoCompleteSingleInput');

        await singleInput.fill('Gr');
        await page.locator('.auto-complete__option').first().click();

        await expect(page.locator('.auto-complete__single-value'))
            .toHaveText('Green');
    });

});
