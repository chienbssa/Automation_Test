import { test, expect } from '@playwright/test';
import users from '../../test-data/users.json';
import { LoginPage } from '../../pages/LoginPage';

test('TC_LOGIN_01 - Login success', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);

    await expect(page.locator('#userName-value')).toHaveText(
        users.validUser.username
    );
});

test.describe('login invalid infomation', () => {

    test('TC_LOGIN_02 - Login wrong username, correct password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('demofale', 'Demo123@');

        await expect(loginPage.errorMessageLocator)
            .toHaveText('Invalid username or password!');
    });

    test('TC_LOGIN_03 - Login correct username, wrong password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('demo1', 'demo123');

        await expect(loginPage.errorMessageLocator)
            .toHaveText('Invalid username or password!');
    });

    test('TC_LOGIN_04 - Login wrong username and password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('demofale', 'demo123');

        await expect(loginPage.errorMessageLocator)
            .toHaveText('Invalid username or password!');
    });

});