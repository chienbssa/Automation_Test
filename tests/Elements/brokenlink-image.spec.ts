import { test, expect } from '@playwright/test';

test.describe('Element Broken Links - Images', () => {

  test('TC_BROKEN_01 - Verify valid image is displayed', async ({ page }) => {
    await page.goto('https://demoqa.com/broken');

    const validImage = page.locator('img').first();
    await expect(validImage).toBeVisible();
  });

  test('TC_BROKEN_02 - Verify broken image', async ({ page }) => {
    await page.goto('https://demoqa.com/broken');
    //lấy 2 phần tử image
    const validImage = page.locator('img').first();
    const brokenImage = page.locator('img').nth(1);

    const validSrc = await validImage.getAttribute('src');
    const brokenSrc = await brokenImage.getAttribute('src');
    //so sánh 2 phần tử valid img và broken img
    expect(brokenSrc).not.toBe(validSrc);
  });




  test('TC_BROKEN_03 - Click valid link', async ({ page }) => {
    await page.goto('https://demoqa.com/broken');

    await page.locator('//a[text()="Click Here for Valid Link"]').click();

    await expect(page).toHaveURL(/demoqa\.com/);
  });

  test('TC_BROKEN_04 - Click broken link', async ({ page }) => {
    await page.goto('https://demoqa.com/broken');

    await page.locator('//a[text()="Click Here for Broken Link"]').click();

    await expect(page).toHaveURL(/status_codes\/500/);
  });

});
