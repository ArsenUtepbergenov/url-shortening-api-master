import Clipboard from './clipboard.js'
import LocalStorage from './localStorage.js'
import LinkItem from './linkItem.js'

export default class LinksList {
  #linksList = document.getElementById('linksList')
  #ls = null
  #copiedBuffer = []

  constructor() {
    this.#ls = new LocalStorage()
  }

  init() {
    const fromLS = this.getAll()

    for (const l of fromLS) {
      this.add(l.origin, l.shorten)
    }
  }

  save(origin, shorten) {
    this.add(origin, shorten)
    this.#ls.save({ origin, shorten })
  }

  #updateCopyButtons() {
    for (const i of this.#copiedBuffer) {
      i.textContent = 'Copy'
      i.classList.remove('copied')
    }
  }

  add(origin, shorten) {
    const linkItem = LinkItem.create({
      originUrl: origin,
      shortenUrl: shorten,
      buttonText: 'Copy',
      onClick: () => {
        Clipboard.save(shorten)
        this.#updateCopyButtons()
        linkItem.lastChild.textContent = 'Copied!'
        linkItem.lastChild.classList.add('copied')
        this.#copiedBuffer.push(linkItem.lastChild)
      },
    })

    this.#linksList.appendChild(linkItem)
  }

  getAll() {
    return JSON.parse(this.#ls.get()) || []
  }
}
