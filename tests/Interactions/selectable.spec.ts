import { test, expect } from '@playwright/test';

test.describe('Interactions - Selectable', () => {

    test('TC_SELECTABLE_01 - Select item in list', async ({ page }) => {
        await page.goto('https://demoqa.com/selectable');

        await page.locator('#demo-tab-list').click();

        const item = page.locator('.vertical-list-container li').first();
        await item.click();

        await expect(item).toHaveClass(/active/);
    });

    test('TC_SELECTABLE_02 - Select multiple items in list', async ({ page }) => {
        await page.goto('https://demoqa.com/selectable');

        await page.locator('#demo-tab-list').click();

        const items = page.locator('.vertical-list-container li');

        await items.nth(0).click();
        await items.nth(1).click();
        await items.nth(2).click();

        await expect(items.nth(2)).toHaveClass(/active/);
    });

    test('TC_SELECTABLE_03 - Select item in grid', async ({ page }) => {
        await page.goto('https://demoqa.com/selectable');

        await page.locator('#demo-tab-grid').click();

        const gridItem = page.locator('.grid-container li').first();
        await gridItem.click();

        await expect(gridItem).toHaveClass(/active/);
    });

});
