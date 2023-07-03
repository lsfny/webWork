const toggleBtn = document.querySelector('.toggleBtn'),
    toggleBtnIcon = document.querySelector('.toggleBtn i'),
    menu = document.querySelector('.menu')
toggleBtn.onclick = () => {
    menu.classList.toggle('open')
    toggleBtnIcon.classList =
    menu.classList.contains('open') ? 'ri-close-line' : 'ri-menu-line'
}