import { test, expect } from '@playwright/test';

test.describe('Widgets - Slider', () => {

    test('TC_SLIDER_01 - Move slider', async ({ page }) => {
        await page.goto('https://demoqa.com/slider');

        const slider = page.locator('input[type="range"]');
        const sliderValue = page.locator('#sliderValue');

        await slider.fill('50');

        await expect(sliderValue).toHaveValue('50');
    });

    test('TC_SLIDER_02 - Set slider value', async ({ page }) => {
        await page.goto('https://demoqa.com/slider');

        const slider = page.locator('input[type="range"]');
        const sliderValue = page.locator('#sliderValue');

        await slider.fill('75');

        await expect(sliderValue).toHaveValue('75');
    });

});
