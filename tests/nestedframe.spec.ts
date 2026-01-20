import { test, expect } from '@playwright/test';

test.describe('Frames - Nested Frames', () => {

    test('TC_NESTED_FRAME_01 - Verify parent frame content', async ({ page }) => {
        await page.goto('https://demoqa.com/nestedframes');

        const parentFrame = page.frameLocator('#frame1');

        await expect(parentFrame.locator('body'))
            .toContainText('Parent frame');
    });

    test('TC_NESTED_FRAME_02 - Verify child frame content', async ({ page }) => {
        await page.goto('https://demoqa.com/nestedframes');

        const parentFrame = page.frameLocator('#frame1');
        const childFrame = parentFrame.frameLocator('iframe');

        await expect(childFrame.locator('body'))
            .toContainText('Child Iframe');
    });

});
