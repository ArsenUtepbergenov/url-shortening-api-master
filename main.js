console.log('test')

const toggleMenu = document.getElementById('navMenuButton')
const menu = document.getElementById('navMobile')

toggleMenu.addEventListener('click', () => {
  menu.classList.toggle('show')
})
