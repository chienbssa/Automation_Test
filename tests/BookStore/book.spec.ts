import { test, expect } from '@playwright/test';
import users from '../../test-data/users.json';
import { UserAPI } from '../../api/UserAPI';
import { BookStorePage } from '../../pages/BookStorePage';

test('Search book UI (login bằng API)', async ({ page, request }) => {
    const userApi = new UserAPI(request);

    const tokenRes = await userApi.generateToken(
        users.validUser.username,
        users.validUser.password
    );
    const { token } = await tokenRes.json();

    await page.addInitScript(token => {
        localStorage.setItem('token', token);
    }, token);

    await page.goto('https://demoqa.com/books');

    const bookPage = new BookStorePage(page);
    await bookPage.searchBook('Git Pocket Guide');
    await bookPage.selectBook('Git Pocket Guide');

    await expect(page).toHaveURL(/9781449325862/);

});
