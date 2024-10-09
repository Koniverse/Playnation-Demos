
/**
 * Bot SDK with request methods that can be used to interact with the bot SDK on Telegram Bot Miniapp
 * */

export const BotSDK = {
  domain: import.meta.env.BOT_SDK_URL || 'https://strapi.anhmtv.xyz',
  header: {
    'X-Telegram-Init-Data': Telegram?.WebApp?.initData
  },
  async get<T>(path: string, params?: Record<string, string>) {
    const query = new URLSearchParams(params).toString();
    const request = await fetch(`${this.domain}/${path}?${query}`, {
      method: 'GET',
      headers: {
        ...this.header
      },
    });

    return (await request.json()) as T;
  },
  async post<T>(path: string, data: object) {
    const request = await fetch(`${this.domain}/${path}`, {
      method: 'POST',
      headers: {
        ...this.header,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return (await request.json()) as T;
  }
}
