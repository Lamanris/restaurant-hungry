const headerBurger = document.querySelector('.header__burger')
const body =  document.querySelector('body')
const headerMenuItem = document.querySelectorAll('.header__navbar__item')

headerBurger.addEventListener ('click', () => {
    body.classList.toggle('active')
});
headerMenuItem.forEach((el) => {
    el.addEventListener('click', () => {
        body.classList.toggle('active');
    })
});


const selectSingle = document.querySelectorAll('.__select');
const selectSingle_title = document.querySelectorAll('.__select__title');
const selectSingle_labels = document.querySelectorAll('.__select__label');
const mainWrapper = document.querySelector('.booking-main-wrapper');
selectSingle_title.forEach((el) =>
el.addEventListener('click', () => {
    let closeParent = el.closest('.__select')
    if ('active' === closeParent.getAttribute('data-state'))
    {
        closeParent.setAttribute('data-state', '')
        mainWrapper.classList.remove('active')

    } else {
        selectSingle.forEach((el) => el.setAttribute('data-state', ''))
        closeParent.setAttribute('data-state', 'active')
        mainWrapper.addEventListener("click", () => {
            closeParent.setAttribute('data-state', '')
            mainWrapper.classList.remove('active')
        })
        mainWrapper.classList.add('active')
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
    mainWrapper.classList.remove('active')
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
