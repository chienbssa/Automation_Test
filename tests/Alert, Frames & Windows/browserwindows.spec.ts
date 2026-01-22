import { test, expect } from '@playwright/test';

test.describe('Frames - Browser Windows', () => {

    test('TC_BROWSER_WINDOW_01 - Open new tab', async ({ page, context }) => {
        await page.goto('https://demoqa.com/browser-windows');

        const [newTab] = await Promise.all([
            context.waitForEvent('page'),
            page.locator('#tabButton').click()
        ]);

        await newTab.waitForLoadState();

        await expect(newTab.locator('h1')).toHaveText('This is a sample page');
    });

    test('TC_BROWSER_WINDOW_02 - Open new window', async ({ page, context }) => {
        await page.goto('https://demoqa.com/browser-windows');

        const [newWindow] = await Promise.all([
            context.waitForEvent('page'),
            page.locator('#windowButton').click()
        ]);

        await newWindow.waitForLoadState();

        await expect(newWindow.locator('h1')).toHaveText('This is a sample page');
    });

    test('TC_BROWSER_WINDOW_03 - Open new window message', async ({ page, context }) => {
        await page.goto('https://demoqa.com/browser-windows');

        const [newMessageWindow] = await Promise.all([
            context.waitForEvent('page'),
            page.locator('#messageWindowButton').click()
        ]);

        await newMessageWindow.waitForLoadState();

        await expect(newMessageWindow.locator('body'))
            .toContainText('Knowledge increases by sharing');
    });

});
