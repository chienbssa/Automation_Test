import { BaseAPI } from './BaseAPI';

export class UserAPI extends BaseAPI {

  async generateToken(username: string, password: string) {
    return this.post('/Account/v1/GenerateToken', {
      userName: username,
      password
    });
  }

  async authorized(username: string, password: string) {
    return this.post('/Account/v1/Authorized', {
      userName: username,
      password
    });
  }

  async getUser(userId: string, token: string) {
    return this.get(`/Account/v1/User/${userId}`, {
      Authorization: `Bearer ${token}`
    });
  }
}
