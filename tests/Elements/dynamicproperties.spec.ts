import { test, expect } from '@playwright/test';

test.describe('Element Dynamic Properties', () => {

    test('TC_DYNAMIC_01 - Button enabled after 5 seconds', async ({ page }) => {
        await page.goto('https://demoqa.com/dynamic-properties');

        const enableButton = page.locator('#enableAfter');

        await expect(enableButton).toBeDisabled();

        await expect(enableButton).toBeEnabled({ timeout: 6000 });

        await enableButton.click();
    });

    test('TC_DYNAMIC_02 - Button color changes after 5 seconds', async ({ page }) => {
        await page.goto('https://demoqa.com/dynamic-properties');

        const colorButton = page.locator('#colorChange');

        const initialClass = await colorButton.getAttribute('class');

        await page.waitForTimeout(5000);

        const updatedClass = await colorButton.getAttribute('class');

        expect(initialClass).not.toEqual(updatedClass);
    });

    test('TC_DYNAMIC_03 - Button visible after 5 seconds', async ({ page }) => {
        await page.goto('https://demoqa.com/dynamic-properties');

        const visibleButton = page.locator('#visibleAfter');

        await expect(visibleButton).not.toBeVisible();

        await expect(visibleButton).toBeVisible({ timeout: 6000 });
    });

});
