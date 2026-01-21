import { test, expect } from '@playwright/test';

test.describe('Widgets - Accordian', () => {

    test('TC_ACCORDIAN_01 - Expand first accordion', async ({ page }) => {
        await page.goto('https://demoqa.com/accordian');

        const header1 = page.locator('#section1Heading');
        const content1 = page.locator('#section1Content');

        await header1.click();
        await expect(content1).toBeVisible();
    });

    test('TC_ACCORDIAN_02 - Expand second accordion', async ({ page }) => {
        await page.goto('https://demoqa.com/accordian');

        const header2 = page.locator('#section2Heading');
        const content2 = page.locator('#section2Content');

        await header2.click();
        await expect(content2).toBeVisible();
    });

    test('TC_ACCORDIAN_03 - Collapse accordion', async ({ page }) => {
        await page.goto('https://demoqa.com/accordian');

        const header2 = page.locator('#section2Heading');
        const content2 = page.locator('#section2Content');

        await header2.click();
        await expect(content2).toBeVisible();

        await header2.click();
        await expect(content2).not.toBeVisible();
    });

});
