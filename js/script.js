const headerBurger = document.querySelector('.header__burger')
const headerMenuBurger = document.querySelector('.header__navbar-burger')
const headerMenu = document.querySelectorAll('.header__navbar')
const body =  document.querySelector('body')
const headerMenuItem = document.querySelectorAll('.header__navbar__item')
const headerLogo = document.querySelector('.header__logo')

headerBurger.addEventListener ('click', () => {
    headerBurger.classList.toggle('active');
    headerMenuBurger.classList.toggle('active');
    headerMenu.forEach((el) => el.classList.toggle('active'));
    body.classList.toggle('lock')
});
headerMenuItem.forEach((el) => {
    el.addEventListener('click', () => {
        headerMenuBurger.classList.remove('active');
        headerMenu.forEach((el) => el.classList.remove('active'));
        headerBurger.classList.remove('active');
        body.classList.remove('lock');
    })
});
headerLogo.addEventListener('click', () => {
    headerMenuBurger.classList.remove('active');
    headerMenu.forEach((el) => el.classList.remove('active'));
    headerBurger.classList.remove('active');
    body.classList.remove('lock');
});




const selectSingle = document.querySelectorAll('.__select');
const selectSingle_title = document.querySelectorAll('.__select__title');
const selectSingle_labels = document.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.forEach((el) =>
el.addEventListener('click', () => {
    let closeParent = el.closest('.__select')
    if ('active' === closeParent.getAttribute('data-state'))
    {
        closeParent.setAttribute('data-state', '')

    } else {
        selectSingle.forEach((el) => el.setAttribute('data-state', ''))
        closeParent.setAttribute('data-state', 'active')
    }
})
)
selectSingle_labels.forEach((el) =>

el.addEventListener('click', (evt) => {
    let closeTitle = el.closest('.__select').firstElementChild
    let closeParent = el.closest('.__select')
    closeTitle.textContent = evt.target.textContent
    closeTitle.classList.add('text-active')
    closeParent.setAttribute('data-state', '')
})
)

const menuTypeItems = document.querySelectorAll('.menu__type-item');
const allMenuLists = document.querySelectorAll('.menu__list');

menuTypeItems.forEach((el) => {
    el.addEventListener('click', () => {
        allMenuLists.forEach((el) => el.classList.remove('active'))
        const menuList = document.getElementById(el.getAttribute('data-state'));
        menuList.classList.add('active')
    })
})
