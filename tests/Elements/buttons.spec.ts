import { test, expect } from '@playwright/test';

test.describe('Element Buttons', () => {

    test('TC_BUTTON_01 - Double Click', async ({ page }) => {
        await page.goto('https://demoqa.com/buttons');

        await page.locator('#doubleClickBtn').dblclick();

        await expect(page.locator('#doubleClickMessage'))
            .toHaveText('You have done a double click');
    });

    test('TC_BUTTON_02 - Right Click', async ({ page }) => {
        await page.goto('https://demoqa.com/buttons');

        await page.locator('#rightClickBtn').click({ button: 'right' });

        await expect(page.locator('#rightClickMessage'))
            .toHaveText('You have done a right click');
    });

    test('TC_BUTTON_03 - Dynamic Click', async ({ page }) => {
        await page.goto('https://demoqa.com/buttons');

        await page.locator('//button[text()="Click Me"]').click();

        await expect(page.locator('#dynamicClickMessage'))
            .toHaveText('You have done a dynamic click');
    });

});

