import { Page } from '@playwright/test';

export class ProfilePage {
  constructor(private page: Page) {}

  deleteBookBtn = 'text=Delete All Books';

  async goto() {
    await this.page.goto('https://demoqa.com/profile');
  }

  async deleteAllBooks() {
    await this.page.click(this.deleteBookBtn);
    await this.page.on('dialog', dialog => dialog.accept());
  }
}
