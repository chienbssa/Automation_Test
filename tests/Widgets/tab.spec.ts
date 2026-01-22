import { test, expect } from '@playwright/test';

test.describe('Widgets - Tabs', () => {

    test('TC_TABS_01 - Switch to Origin tab', async ({ page }) => {
        await page.goto('https://demoqa.com/tabs');

        await page.locator('#demo-tab-origin').click();

        await expect(page.locator('#demo-tabpane-origin')).toBeVisible();
    });

    test('TC_TABS_02 - Switch to Use tab', async ({ page }) => {
        await page.goto('https://demoqa.com/tabs');

        await page.locator('#demo-tab-use').click();

        await expect(page.locator('#demo-tabpane-use')).toBeVisible();
    });

    test('TC_TABS_03 - Switch to What tab', async ({ page }) => {
        await page.goto('https://demoqa.com/tabs');

        await page.locator('#demo-tab-what').click();

        await expect(page.locator('#demo-tabpane-what')).toBeVisible();
    });

    test('TC_TABS_04 - Verify disabled tab', async ({ page }) => {
        await page.goto('https://demoqa.com/tabs');

        await expect(page.locator('#demo-tab-more')).toHaveAttribute('aria-disabled', 'true');
    });

});
