import { test, expect } from '@playwright/test';

test.describe('Interactions - Resizable', () => {

    test('TC_RESIZABLE_01 - Resize restricted box', async ({ page }) => {
        await page.goto('https://demoqa.com/resizable');

        const box = page.locator('#resizableBoxWithRestriction');
        const handle = box.locator('span.react-resizable-handle');

        const before = await box.boundingBox();

        if (before) {
            await handle.hover();
            await page.mouse.down();
            await page.mouse.move(before.x + before.width + 50, before.y + before.height + 50);
            await page.mouse.up();
        }

        const after = await box.boundingBox();

        expect(after?.width).toBeGreaterThan(before?.width || 0);
        expect(after?.height).toBeGreaterThan(before?.height || 0);
    });

    test('TC_RESIZABLE_02 - Resize unrestricted box', async ({ page }) => {
        await page.goto('https://demoqa.com/resizable');

        const box = page.locator('#resizable');
        const handle = box.locator('span.react-resizable-handle');

        const before = await box.boundingBox();

        if (before) {
            await handle.hover();
            await page.mouse.down();
            await page.mouse.move(before.x + before.width + 100, before.y + before.height + 100);
            await page.mouse.up();
        }

        const after = await box.boundingBox();

        expect(after?.width).toBeGreaterThan(before?.width || 0);
        expect(after?.height).toBeGreaterThan(before?.height || 0);
    });

});
