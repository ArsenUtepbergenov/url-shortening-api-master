export default class Menu {
  constructor() {
    document
      .getElementById('navMenuButton')
      .addEventListener('click', () => {
        document.getElementById('navMobile').classList.toggle('show')
      })
  }
}
