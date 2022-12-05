export default class SwapiSerwer {
  apiBase = 'https://aviasales-test-api.kata.academy/';

  async searchId() {
    const response = await fetch(`${this.apiBase}search`);
    if (!response.ok) {
      throw new Error(`Could not fetch search id 
      ,received ${response.status}`);
    }
    const result = await response.json();
    return result;
  }

  async getTickets(id) {
    const response = await fetch(`${this.apiBase}tickets?searchId=${id}`);
    if (!response.ok) {
      throw new Error(`Could not fetch search id 
      ,received ${response.status}`);
    }
    const result = await response.json();
    return result;
  }
}
