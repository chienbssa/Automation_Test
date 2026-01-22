import { test, expect } from '@playwright/test';

test.describe('Widgets - Progress Bar', () => {

    test('TC_PROGRESS_BAR_01 - Start progress bar', async ({ page }) => {
        await page.goto('https://demoqa.com/progress-bar');

        await page.locator('#startStopButton').click();

        await expect(page.locator('.progress-bar')).not.toHaveText('0%');
    });

    test('TC_PROGRESS_BAR_02 - Stop progress bar', async ({ page }) => {
        await page.goto('https://demoqa.com/progress-bar');

        const button = page.locator('#startStopButton');
        const progressBar = page.locator('.progress-bar');

        await button.click();
        await page.waitForTimeout(1000);
        await button.click();

        const valueAfterStop = await progressBar.textContent();
        await page.waitForTimeout(1000);

        await expect(progressBar).toHaveText(valueAfterStop || ''); //dùng or, nếu valueAfterStop trả về null thì lấy null 
    });

    test('TC_PROGRESS_BAR_03 - Complete progress bar to 100%', async ({ page }) => {
        await page.goto('https://demoqa.com/progress-bar');

        await page.locator('#startStopButton').click();

        await expect(page.locator('.progress-bar'))
            .toHaveText('100%', { timeout: 20000 });

        await expect(page.locator('#resetButton')).toBeVisible();
    });

});
