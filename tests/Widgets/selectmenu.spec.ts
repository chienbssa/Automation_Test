import { test, expect } from '@playwright/test';

test.describe('Wigets - Select Menu', () => {

    test('TC_SELECT_MENU_01 - Select value dropdown', async ({ page }) => {
        await page.goto('https://demoqa.com/select-menu');

        await page.locator('#withOptGroup').click();

        await page.locator('.css-26l3qy-menu').getByText('Group 1, option 1').click();

        await expect(page.locator('#withOptGroup')).toContainText('Group 1, option 1');
    });


    test('TC_SELECT_MENU_02 - Select one dropdown', async ({ page }) => {
        await page.goto('https://demoqa.com/select-menu');

        await page.locator('#selectOne').click();

        await page.locator('.css-26l3qy-menu').locator('div').filter({ hasText: 'Mrs.' }).first().click();

        await expect(page.locator('#selectOne')).toContainText('Mrs.');
    });



    test('TC_SELECT_MENU_03 - Multi select dropdown', async ({ page }) => {
        await page.goto('https://demoqa.com/select-menu');

        const multiSelectInput = page.locator('#react-select-4-input');

        await multiSelectInput.fill('Green');
        await page.keyboard.press('Enter');

        await multiSelectInput.fill('Blue');
        await page.keyboard.press('Enter');

        await expect(page.locator('.css-1rhbuit-multiValue'))
            .toHaveCount(2);
    });






    test('TC_SELECT_MENU_04 - Old style select menu', async ({ page }) => {
        await page.goto('https://demoqa.com/select-menu');

        await page.selectOption('#oldSelectMenu', '3');

        await expect(page.locator('#oldSelectMenu')).toHaveValue('3');
    });

});
