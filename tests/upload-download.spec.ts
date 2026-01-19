import { test, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

test.describe('Element Upload and Download', () => {

  test('TC_UPLOAD_DOWNLOAD_01 - Download file successfully', async ({ page }) => {
    await page.goto('https://demoqa.com/upload-download');

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.locator('#downloadButton').click()
    ]);

    const filePath = path.join(__dirname, 'downloadedFile.jpeg');
    await download.saveAs(filePath);

    expect(fs.existsSync(filePath)).toBeTruthy();
  });

  test('TC_UPLOAD_DOWNLOAD_02 - Upload file successfully', async ({ page }) => {
    await page.goto('https://demoqa.com/upload-download');

    const fileToUpload = path.join(__dirname, 'test-upload.txt');

    fs.writeFileSync(fileToUpload, 'This is a test file');

    await page.locator('#uploadFile').setInputFiles(fileToUpload);

    await expect(page.locator('#uploadedFilePath'))
      .toContainText('test-upload.txt');
  });

});
