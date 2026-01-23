import { test, expect } from '@playwright/test';

test.describe('Interactions - Draggable', () => {

    test('TC_DRAGGABLE_01 - Simple drag', async ({ page }) => {
        await page.goto('https://demoqa.com/dragabble');

        await page.mouse.wheel(0, 300);

        const dragBox = page.locator('#dragBox');
        const before = await dragBox.boundingBox();

        if (before) {
            await page.mouse.move(
                before.x + before.width / 2,
                before.y + before.height / 2
            );
            await page.mouse.down();
            await page.mouse.move(
                before.x + before.width / 2 + 100,
                before.y + before.height / 2 + 50
            );
            await page.mouse.up();
        }

        const after = await dragBox.boundingBox();
        expect(after?.x).not.toBe(before?.x);
        expect(after?.y).not.toBe(before?.y);
    });

    test('TC_DRAGGABLE_02 - Axis restricted drag', async ({ page }) => {
        await page.goto('https://demoqa.com/dragabble');

        await page.mouse.wheel(0, 300);

        await page.locator('#draggableExample-tab-axisRestriction').click();

        const xBox = page.locator('#restrictedX');
        const yBox = page.locator('#restrictedY');

        const xBefore = await xBox.boundingBox();
        const yBefore = await yBox.boundingBox();

        if (xBefore && yBefore) {
            await xBox.hover();
            await page.mouse.down();
            await page.mouse.move(xBefore.x + 150, xBefore.y);
            await page.mouse.up();

            await yBox.hover();
            await page.mouse.down();
            await page.mouse.move(yBefore.x, yBefore.y + 150);
            await page.mouse.up();
        }

        const xAfter = await xBox.boundingBox();
        const yAfter = await yBox.boundingBox();

        expect(xAfter?.y).toBeCloseTo(xBefore?.y || 0, 0);
        expect(yAfter?.x).toBeCloseTo(yBefore?.x || 0, 0);
    });

    test('TC_DRAGGABLE_03 - Container restricted drag', async ({ page }) => {
        await page.goto('https://demoqa.com/dragabble');

        await page.mouse.wheel(0, 500);

        await page.locator('#draggableExample-tab-containerRestriction').click();

        const containerBox = page.locator('#containmentWrapper');
        const dragBox = containerBox.locator('div.ui-widget-content');

        const before = await dragBox.boundingBox();
        const container = await containerBox.boundingBox();

        if (before && container) {
            await page.mouse.move(
                before.x + before.width / 2,
                before.y + before.height / 2
            );
            await page.mouse.down();
            await page.mouse.move(
                container.x + container.width - 10,
                container.y + container.height - 10
            );
            await page.mouse.up();
        }

        const after = await dragBox.boundingBox();

        expect(after?.x).toBeLessThanOrEqual((container?.x || 0) + (container?.width || 0));
        expect(after?.y).toBeLessThanOrEqual((container?.y || 0) + (container?.height || 0));
    });

    test('TC_DRAGGABLE_04 - Cursor style drag', async ({ page }) => {
        await page.goto('https://demoqa.com/dragabble');

        await page.mouse.wheel(0, 500);

        await page.locator('#draggableExample-tab-cursorStyle').click();

        const cursorBox = page.locator('#cursorCenter');
        const before = await cursorBox.boundingBox();

        if (before) {
            await page.mouse.move(
                before.x + before.width / 2,
                before.y + before.height / 2
            );
            await page.mouse.down();
            await page.mouse.move(
                before.x + 80,
                before.y + 80
            );
            await page.mouse.up();
        }

        const after = await cursorBox.boundingBox();
        expect(after?.x).not.toBe(before?.x);
        expect(after?.y).not.toBe(before?.y);
    });

});
