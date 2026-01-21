import { test, expect } from '@playwright/test';

test.describe('Widgets - Menu', () => {

    test('TC_MENU_01 - Main Item 1 has no submenu', async ({ page }) => {
        await page.goto('https://demoqa.com/menu');

        const mainItem1 = page.locator('li:has(a:has-text("Main Item 1"))');
        await mainItem1.hover();

        await expect(mainItem1.locator('ul')).toHaveCount(0);
    });


    test('TC_MENU_02 - Nested submenu under Main Item 2', async ({ page }) => {
        await page.goto('https://demoqa.com/menu');

        const mainItem2 = page.locator('li:has(a:has-text("Main Item 2"))');
        await mainItem2.hover();

        const subSubList = mainItem2.locator('a:has-text("SUB SUB LIST")');
        await subSubList.hover();

        await expect(
            page.locator('a:has-text("Sub Sub Item 1")')
        ).toBeVisible();

        await expect(
            page.locator('a:has-text("Sub Sub Item 2")')
        ).toBeVisible();
    });

    test('TC_MENU_03 - Main Item 3 has no submenu', async ({ page }) => {
        await page.goto('https://demoqa.com/menu');

        const mainItem3 = page.locator('li:has(a:has-text("Main Item 3"))');
        await mainItem3.hover();

        await expect(mainItem3.locator('ul')).toHaveCount(0);
    });

});
