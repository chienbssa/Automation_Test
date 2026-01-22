import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) { }

  usernameInput = '#userName';
  passwordInput = '#password';
  loginButton = '#login';
  logoutButton = '#submit';
  errorMessage = '#name';

  async goto() {
    await this.page.goto('https://demoqa.com/login');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async logout() {
    await this.page.click(this.logoutButton);
  }

  get errorMessageLocator() {
    return this.page.locator(this.errorMessage);
  }
}
