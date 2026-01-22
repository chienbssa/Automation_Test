import { Page } from '@playwright/test';

export class BookStorePage {
  constructor(private page: Page) {}

  searchBox = '#searchBox';
  addToCollectionBtn = 'text=Add To Your Collection';

  async searchBook(bookName: string) {
    await this.page.fill(this.searchBox, bookName);
  }

  async selectBook(bookName: string) {
    await this.page.click(`text=${bookName}`);
  }

  async addBookToCollection() {
    await this.page.click(this.addToCollectionBtn);
    await this.page.on('dialog', dialog => dialog.accept());
  }
}
