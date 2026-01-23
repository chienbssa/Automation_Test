import { test, expect } from '@playwright/test';
import users from '../../test-data/users.json';
import books from '../../test-data/books.json';
import { UserAPI } from '../../api/UserAPI';
import { BookAPI } from '../../api/BookAPI';

test('TC_BOOK_API_01 - Add book using API', async ({ request }) => {
    const userApi = new UserAPI(request);
    const bookApi = new BookAPI(request);

    // 1. Generate token
    const tokenRes = await userApi.generateToken(
        users.validUser.username,
        users.validUser.password
    );
    expect(tokenRes.status()).toBe(200);

    const { token } = await tokenRes.json();

    // Authorized
    const authRes = await userApi.authorized(
        users.validUser.username,
        users.validUser.password
    );
    expect(authRes.status()).toBe(200);

    // Add book
    const addRes = await bookApi.addBook(
        users.validUser.userId,
        books.isbnList[0],
        token
    );

    // chấp nhận book đã tồn tại hoặc add mới
    expect([201, 400]).toContain(addRes.status());

    if (addRes.status() === 400) {
        const body = await addRes.json();
        console.log('Add book failed (expected):', body.message);
    }
});


