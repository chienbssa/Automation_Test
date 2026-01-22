import { APIRequestContext } from '@playwright/test';

export class BaseAPI {
  constructor(protected request: APIRequestContext) { }

  async get(url: string, headers = {}) {
    return this.request.get(url, { headers });
  }

  async post(url: string, body: any, headers = {}, retry = 2): Promise<any> {
    try {
      return await this.request.post(url, { data: body, headers });
    } catch (e) {
      if (retry > 0) {
        await new Promise(r => setTimeout(r, 1000));
        return this.post(url, body, headers, retry - 1);
      }
      throw e;
    }
  }

  async delete(url: string, headers = {}) {
    return this.request.delete(url, { headers });
  }
}
