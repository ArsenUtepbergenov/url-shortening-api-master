export default class Clipboard {
  static save(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Link copied to clipboard')
      })
      .catch(err => {
        console.error('Failed to copy: ', err)
      })
  }
}
