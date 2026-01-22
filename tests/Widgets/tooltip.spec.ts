import { test, expect } from '@playwright/test';

test.describe('Widgets - Tool Tips', () => {

    test('TC_TOOL_TIP_01 - Verify tooltip on button', async ({ page }) => {
        await page.goto('https://demoqa.com/tool-tips');

        const button = page.locator('#toolTipButton');
        await button.hover();

        await expect(page.locator('.tooltip-inner')).toHaveText('You hovered over the Button');
    });

    test('TC_TOOL_TIP_02 - Verify tooltip on text field', async ({ page }) => {
        await page.goto('https://demoqa.com/tool-tips');

        const input = page.locator('#toolTipTextField');
        await input.hover();

        await expect(page.locator('.tooltip-inner')).toHaveText('You hovered over the text field');
    });

    test('TC_TOOL_TIP_03 - Verify tooltip on link', async ({ page }) => {
        await page.goto('https://demoqa.com/tool-tips');

        const link = page.locator('a:has-text("Contrary")');
        await link.hover();

        await expect(page.locator('.tooltip-inner')).toHaveText('You hovered over the Contrary');
    });

});
