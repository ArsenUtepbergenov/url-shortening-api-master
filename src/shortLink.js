import Api from './api.js'
import LinkError from './linkError.js'
import LinksList from './linksList.js'

const PROXY_URL = 'http://127.0.0.1:3000/shorten'

export default class ShortLink {
  #shortenForm = document.getElementById('shortenForm')
  #linkInput = document.getElementById('linkInput')
  #api = null
  error = null
  #linksList = null

  constructor() {
    this.#linksList = new LinksList()
    this.error = new LinkError('')
    this.#api = new Api(PROXY_URL)
    this.#shortenForm.addEventListener('submit', this.#submitForm)

    this.#linksList.init()
  }

  #submitForm = event => {
    event.preventDefault()

    try {
      if (!this.#linkInput.value) throw new Error('Please add a link')
      else {
        this.#linkInput.classList.remove('input-error')
        this.error.clear()
      }
    } catch (error) {
      console.error(error)
      this.error.show(error.message)
      this.#linkInput.classList.add('input-error')
      return
    }

    if (this.#shortenForm.checkValidity()) {
      this.#submit()
    } else {
      this.#shortenForm.reportValidity()
    }
  }

  #submit() {
    this.#api
      .post(this.#linkInput.value)
      .then(res => {
        if (res.result_url) {
          console.log(res)

          this.#linksList.save(this.#linkInput.value, res.result_url)

          this.error.clear()
        } else if (res.error) throw res.error
      })
      .catch(error => {
        console.error(error)
        this.error.show(error)
      })
  }

  destroy() {
    this.#shortenForm.removeEventListener('submit', this.#submitForm)
    this.#shortenForm = null
  }
}
