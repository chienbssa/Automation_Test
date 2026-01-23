import { test, expect } from '@playwright/test';

test.describe('Frames - Alerts', () => {

    test('TC_ALERT_01 - Accept simple alert', async ({ page }) => {
        await page.goto('https://demoqa.com/alerts');

        page.once('dialog', async dialog => {
            await dialog.accept();
        });

        await page.locator('#alertButton').click();
    });

    test('TC_ALERT_02 - Accept timer alert', async ({ page }) => {
        await page.goto('https://demoqa.com/alerts');

        page.once('dialog', async dialog => {
            await dialog.accept();
        });

        await page.locator('#timerAlertButton').click();
    });

    test('TC_ALERT_03 - Dismiss confirm alert', async ({ page }) => {
        await page.goto('https://demoqa.com/alerts');

        page.once('dialog', async dialog => {
            await dialog.dismiss();
        });

        await page.locator('#confirmButton').click();

        await expect(page.locator('#confirmResult'))
            .toContainText('Cancel');
    });

    test('TC_ALERT_04 - Handle prompt alert', async ({ page }) => {
        await page.goto('https://demoqa.com/alerts');

        page.once('dialog', async dialog => {
            await dialog.accept('Playwright Test');
        });

        await page.locator('#promtButton').click();

        await expect(page.locator('#promptResult'))
            .toContainText('Playwright Test');
    });

});
