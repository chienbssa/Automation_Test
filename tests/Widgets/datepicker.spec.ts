import { test, expect } from '@playwright/test';

test.describe('Widgets - Date Picker', () => {

    test('TC_DATE_PICKER_01 - Select date', async ({ page }) => {
        await page.goto('https://demoqa.com/date-picker');

        const dateInput = page.locator('#datePickerMonthYearInput');
        await dateInput.click();

        await page.locator('.react-datepicker__day--015').click();

        await expect(dateInput).not.toHaveValue('');
    });

    test('TC_DATE_PICKER_02 - Select date and time', async ({ page }) => {
        await page.goto('https://demoqa.com/date-picker');

        const dateTimeInput = page.locator('#dateAndTimePickerInput');
        await dateTimeInput.click();

        await page.locator('.react-datepicker__day--020').click();
        await page.locator('.react-datepicker__time-list-item').first().click();

        await expect(dateTimeInput).not.toHaveValue('');
    });

    test('TC_DATE_PICKER_03 - Manual input date', async ({ page }) => {
        await page.goto('https://demoqa.com/date-picker');

        const dateInput = page.locator('#datePickerMonthYearInput');
        await dateInput.fill('12/25/2026');

        await expect(dateInput).toHaveValue('12/25/2026');
    });

});
