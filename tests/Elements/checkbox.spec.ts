import { test, expect } from '@playwright/test';

test.describe('Element CheckBox', () => {

    test('TC_CHECKBOX_01 - Select Home checkbox', async ({ page }) => {
        await page.goto('https://demoqa.com/checkbox');

        await page.locator('.rct-option-expand-all').click();
        await page.locator('label[for="tree-node-home"]').click();

        await expect(page.locator('#result')).toContainText('home');
    });

    test('TC_CHECKBOX_02 - Select Desktop checkbox', async ({ page }) => {
        await page.goto('https://demoqa.com/checkbox');

        await page.locator('.rct-option-expand-all').click();
        await page.locator('label[for="tree-node-desktop"]').click();

        await expect(page.locator('#result')).toContainText('desktop');
    });

    test('TC_CHECKBOX_03 - Select multiple checkboxes', async ({ page }) => {
        await page.goto('https://demoqa.com/checkbox');

        await page.locator('.rct-option-expand-all').click();
        await page.locator('label[for="tree-node-desktop"]').click();
        await page.locator('label[for="tree-node-documents"]').click();

        await expect(page.locator('#result')).toContainText('desktop');
        await expect(page.locator('#result')).toContainText('documents');
    });

});

