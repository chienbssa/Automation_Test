import { test, expect } from '@playwright/test';

test.describe('Interactions - Droppable', () => {

    test('TC_DROPPABLE_01 - Simple drag and drop', async ({ page }) => {
        await page.goto('https://demoqa.com/droppable');

        const drag = page.locator('#draggable');
        const drop = page.locator('#simpleDropContainer #droppable');

        await drag.dragTo(drop);

        await expect(drop).toHaveText('Dropped!');
    });


    test('TC_DROPPABLE_02 - Accept droppable', async ({ page }) => {
        await page.goto('https://demoqa.com/droppable');

        await page.locator('#droppableExample-tab-accept').click();

        const panel = page.getByRole('tabpanel', { name: 'Accept' });

        const acceptable = panel.locator('#acceptable');
        const notAcceptable = panel.locator('#notAcceptable');
        const drop = panel.locator('#droppable');

        // Case 1: Acceptable → drop được
        await acceptable.dragTo(drop);
        await expect(drop).toHaveText('Dropped!');

        // Reset trạng thái
        await page.reload();
        await page.locator('#droppableExample-tab-accept').click();

        const panel2 = page.getByRole('tabpanel', { name: 'Accept' });
        const notAcceptable2 = panel2.locator('#notAcceptable');
        const drop2 = panel2.locator('#droppable');

        // Case 2: Not Acceptable → KHÔNG drop
        const before = await drop2.textContent();

        // drag thủ công, không dùng dragTo
        const srcBox = await notAcceptable2.boundingBox();
        const dstBox = await drop2.boundingBox();

        if (srcBox && dstBox) {
            await page.mouse.move(srcBox.x + srcBox.width / 2, srcBox.y + srcBox.height / 2);
            await page.mouse.down();
            await page.mouse.move(dstBox.x + dstBox.width / 2, dstBox.y + dstBox.height / 2);
            await page.mouse.up();
        }

        const after = await drop2.textContent();
        expect(after).toBe(before);
    });



    test('TC_DROPPABLE_03 - Prevent propagation', async ({ page }) => {
        await page.goto('https://demoqa.com/droppable');

        await page.locator('#droppableExample-tab-preventPropogation').click();

        const drag = page.locator('#dragBox');
        const innerDrop = page.locator('#notGreedyInnerDropBox');
        const outerDrop = page.locator('#notGreedyDropBox');

        await drag.dragTo(innerDrop);

        await expect(innerDrop).toHaveClass(/ui-state-highlight/);
        await expect(outerDrop).toHaveClass(/ui-state-highlight/);
    });


    test('TC_DROPPABLE_04 - Revert draggable', async ({ page }) => {
        await page.goto('https://demoqa.com/droppable');

        await page.locator('#droppableExample-tab-revertable').click();

        const revertable = page.locator('#revertable');
        const drop = page.locator('#revertableDropContainer #droppable');

        const before = await revertable.boundingBox();

        await revertable.dragTo(drop);
        await page.waitForTimeout(1000);

        const after = await revertable.boundingBox();

        expect(before?.x).toBeCloseTo(after?.x || 0, 0);
        expect(before?.y).toBeCloseTo(after?.y || 0, 0);
    });

});
