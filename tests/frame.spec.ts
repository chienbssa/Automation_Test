import { test, expect } from '@playwright/test';

test.describe('Frames - Frame', () => {

    test('TC_FRAME_01 - Verify content in Frame 1', async ({ page }) => {
        await page.goto('https://demoqa.com/frames');

        const frame1 = page.frameLocator('#frame1');

        await expect(frame1.locator('h1'))
            .toHaveText('This is a sample page');
    });

    test('TC_FRAME_02 - Verify content in Frame 2', async ({ page }) => {
        await page.goto('https://demoqa.com/frames');

        const frame2 = page.frameLocator('#frame2');

        await expect(frame2.locator('h1'))
            .toHaveText('This is a sample page');
    });

});
