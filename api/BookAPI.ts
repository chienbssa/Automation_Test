import { BaseAPI } from './BaseAPI';

export class BookAPI extends BaseAPI {

    async getAllBooks() {
        return this.get('/BookStore/v1/Books');
    }

    async addBook(userId: string, isbn: string, token: string) {
        return this.post(
            '/BookStore/v1/Books',
            {
                userId,
                collectionOfIsbns: [{ isbn }]
            },
            { Authorization: `Bearer ${token}` }
        );
    }

    async deleteBook(userId: string, isbn: string, token: string) {
        return this.request.delete(
            `/BookStore/v1/Book`,
            {
                headers: { Authorization: `Bearer ${token}` },
                params: { UserId: userId, ISBN: isbn }
            }
        );
    }
}
