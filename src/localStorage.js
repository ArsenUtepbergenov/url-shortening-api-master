export default class LocalStorage {
  #storage = localStorage

  save(data) {
    let a = []
    a = JSON.parse(this.#storage.getItem('links')) || []
    a.push(data)
    this.#storage.setItem('links', JSON.stringify(a))
  }

  get() {
    return this.#storage.getItem('links')
  }

  clear() {
    this.#storage.clear()
  }
}
