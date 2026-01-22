import { test, expect } from '@playwright/test';

test.describe('Element Links', () => {

    test('TC_LINK_01 - Home link opens new tab', async ({ page, context }) => {
        await page.goto('https://demoqa.com/links');

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.locator('#simpleLink').click()
        ]);

        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(/demoqa\.com/);
    });

    test('TC_LINK_02 - Dynamic Home link opens new tab', async ({ page, context }) => {
        await page.goto('https://demoqa.com/links');

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.locator('#dynamicLink').click()
        ]);

        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(/demoqa\.com/);
    });

    test('TC_LINK_03 - Created API link', async ({ page }) => {
        await page.goto('https://demoqa.com/links');

        await page.locator('#created').click();

        await expect(page.locator('#linkResponse')).toContainText('201');
    });

    test('TC_LINK_04 - Not Found API link', async ({ page }) => {
        await page.goto('https://demoqa.com/links');

        await page.locator('#invalid-url').click();

        await expect(page.locator('#linkResponse')).toContainText('404');
    });

});

