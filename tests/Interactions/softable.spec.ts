import { test, expect } from '@playwright/test';

test.describe('Interactions - Sortable', () => {

    test('TC_SORTABLE_01 - Reorder list items', async ({ page }) => {
        await page.goto('https://demoqa.com/sortable');

        //scroll màn hình đến vị trí chỉ định
        await page.mouse.wheel(0, 500);

        await page.locator('#demo-tab-list').click();

        const itemOne = page.locator('.vertical-list-container div').first();
        const itemThree = page.locator('.vertical-list-container div').nth(2);

        //lấy vị trí và kích thước của phần tử trên màn hình
        const box1 = await itemOne.boundingBox();
        const box3 = await itemThree.boundingBox();

        if (box1 && box3) { //kiểm tra phần tử đều có tọa độ trên màn hình
            await page.mouse.move( //di chuyển chuột đến giữa phần tử
                box1.x + box1.width / 2,
                box1.y + box1.height / 2
            );
            await page.mouse.down(); //nhấn giữ chuột trái
            await page.mouse.move(
                box3.x + box3.width / 2,
                box3.y + box3.height / 2
            );
            await page.mouse.up(); //thả chuột
        }

        await expect(page.locator('.vertical-list-container div').first())
            .not.toHaveText('One');
    });


    test('TC_SORTABLE_02 - Reorder grid items (fixed)', async ({ page }) => {
        await page.goto('https://demoqa.com/sortable');

        await page.locator('#demo-tab-grid').click();

        const items = page.locator('.grid-container div');

        const firstItem = items.first();
        await firstItem.scrollIntoViewIfNeeded(); //scroll màn hình 

        const beforeOrder = await items.allTextContents();

        const targetItem = items.nth(3);

        const box1 = await firstItem.boundingBox();
        const box2 = await targetItem.boundingBox();

        if (!box1 || !box2) { //kiểm tra nếu phần tử không xuất hiện thì dừng test
            throw new Error('Element not visible for drag');
        }

        await page.mouse.move(
            box1.x + box1.width / 2,
            box1.y + box1.height / 2
        );
        await page.mouse.down();
        await page.mouse.move(
            box2.x + box2.width / 2,
            box2.y + box2.height / 2,
            { steps: 10 }
        );
        await page.mouse.up();

        const afterOrder = await items.allTextContents();
        //so sánh vị trí các phần tử trước và sau khi di chuyển
        expect(afterOrder).not.toEqual(beforeOrder);
    });


});
