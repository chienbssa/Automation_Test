import { test, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

test.describe('Forms - Practice Form', () => {

    test('TC_FORM_01 - Submit Practice Form successfully', async ({ page }) => {
        await page.goto('https://demoqa.com/automation-practice-form');

        await page.locator('#firstName').fill('Nguyen');
        await page.locator('#lastName').fill('Van A');
        await page.locator('#userEmail').fill('nguyenvana@gmail.com');

        await page.locator('label[for="gender-radio-1"]').click();

        await page.locator('#userNumber').fill('0123456789');

        await page.locator('#dateOfBirthInput').click();
        await page.locator('.react-datepicker__month-select').selectOption('0');
        await page.locator('.react-datepicker__year-select').selectOption('1998');
        await page.locator('.react-datepicker__day--015').click();

        await page.locator('#subjectsInput').fill('Math');
        await page.locator('//div[contains(@class,"subjects-auto-complete__option")]').click();

        await page.locator('label[for="hobbies-checkbox-1"]').click();

        const imagePath = path.join(__dirname, 'avatar.png');
        fs.writeFileSync(imagePath, 'test image');
        await page.locator('#uploadPicture').setInputFiles(imagePath);

        await page.locator('#currentAddress').fill('Ha Noi');

        await page.locator('#state').click();
        await page.locator('//div[text()="NCR"]').click();

        await page.locator('#city').click();
        await page.locator('//div[text()="Delhi"]').click();

        await page.locator('#submit').click();

        const modal = page.locator('.modal-content');

        await expect(modal).toBeVisible();
        await expect(modal).toContainText('Nguyen Van A');
        await expect(modal).toContainText('nguyenvana@gmail.com');
        await expect(modal).toContainText('Male');
        await expect(modal).toContainText('0123456789');
        await expect(modal).toContainText('15 January,1998');
        await expect(modal).toContainText('Maths');
        await expect(modal).toContainText('Sports');
        await expect(modal).toContainText('avatar.png');
        await expect(modal).toContainText('Ha Noi');
        await expect(modal).toContainText('NCR Delhi');
    });

    test('TC_FORM_02 - Verify required field validation', async ({ page }) => {
        await page.goto('https://demoqa.com/automation-practice-form');

        await page.locator('#submit').click();

        await expect(page.locator('#firstName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

});
