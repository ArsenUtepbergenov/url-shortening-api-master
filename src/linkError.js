export default class LinkError {
  #errorMessage = document.getElementById('errorMessage')
  #message = ''

  constructor(msg) {
    this.#message = msg
  }

  show(msg) {
    this.#errorMessage.innerHTML = msg || this.#message
  }

  clear() {
    this.#errorMessage.innerHTML = ''
    this.#message = ''
  }
}
