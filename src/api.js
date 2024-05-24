export default class Api {
  #url = null

  constructor(url) {
    this.#url = url
  }

  async post(data) {
    try {
      const response = await fetch(this.#url, {
        method: 'POST',
        body: JSON.stringify({ url: data }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return response.json()
    } catch (error) {
      console.error('Error:', error)
      return error
    }
  }
}
