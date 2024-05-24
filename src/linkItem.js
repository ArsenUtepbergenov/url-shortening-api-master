export default class LinkItem {
  static create({
    originUrl = '',
    shortenUrl = '',
    buttonText = 'Copy',
    onClick = null,
  } = {}) {
    const item = document.createElement('div')
    item.classList.add('item')

    const createLink = (url, className) => {
      const link = document.createElement('a')
      link.classList.add('link', className)
      link.href = url
      link.textContent = url
      return link
    }

    item.appendChild(createLink(originUrl, 'origin'))
    item.appendChild(document.createElement('div')).classList.add('hr')
    item.appendChild(createLink(shortenUrl, 'shorten'))

    const button = document.createElement('button')
    button.classList.add('button', 'primary-button')
    button.textContent = buttonText
    if (typeof onClick === 'function') {
      button.addEventListener('click', onClick)
    }
    item.appendChild(button)

    return item
  }
}
