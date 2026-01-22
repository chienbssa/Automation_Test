import { test, expect } from '@playwright/test';

test.describe('Frames - Modal Dialogs', () => {

    test('TC_MODAL_01 - Verify Small Modal dialog', async ({ page }) => {
        await page.goto('https://demoqa.com/modal-dialogs');

        await page.locator('#showSmallModal').click();

        const smallModal = page.locator('.modal-content');
        await expect(smallModal).toBeVisible();

        await expect(smallModal.locator('.modal-body')).toContainText('This is a small modal');

        await page.locator('#closeSmallModal').click();

        await expect(smallModal).not.toBeVisible();
    });

    test('TC_MODAL_02 - Verify Large Modal dialog', async ({ page }) => {
        await page.goto('https://demoqa.com/modal-dialogs');

        await page.locator('#showLargeModal').click();

        const largeModal = page.locator('.modal-content');
        await expect(largeModal).toBeVisible();

        await expect(largeModal.locator('.modal-body'))
            .toContainText('Lorem Ipsum');

        await page.locator('#closeLargeModal').click();

        await expect(largeModal).not.toBeVisible();
    });

});
