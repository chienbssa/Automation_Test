import { test, expect } from '@playwright/test';

test.describe('Element WebTables', () => {

    test('TC_WEBTABLE_01 - Add new record', async ({ page }) => {
        await page.goto('https://demoqa.com/webtables');

        await page.locator('#addNewRecordButton').click();

        await page.locator('#firstName').fill('Nguyen');
        await page.locator('#lastName').fill('Van A');
        await page.locator('#userEmail').fill('nguyenvana@gmail.com');
        await page.locator('#age').fill('25');
        await page.locator('#salary').fill('1000');
        await page.locator('#department').fill('IT');

        await page.locator('#submit').click();

        await expect(page.locator('.rt-tbody')).toContainText('Nguyen');
        await expect(page.locator('.rt-tbody')).toContainText('IT');
    });

    test('TC_WEBTABLE_02 - Edit record', async ({ page }) => {
        await page.goto('https://demoqa.com/webtables');

        await page.locator('span[title="Edit"]').first().click();

        await page.locator('#department').fill('HR');
        await page.locator('#submit').click();

        await expect(page.locator('.rt-tbody')).toContainText('HR');
    });

    test('TC_WEBTABLE_03 - Delete record', async ({ page }) => {
        await page.goto('https://demoqa.com/webtables');

        await page.locator('span[title="Delete"]').first().click();

        await expect(page.locator('.rt-tbody')).not.toContainText('HR');
    });

});

