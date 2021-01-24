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

const menuTypeItems = document.querySelectorAll('.menu_type-item');
const allMenuLists = document.querySelectorAll('.menu_list');

menuTypeItems.forEach((el) => {
    el.addEventListener('click', () => {
        allMenuLists.forEach((el) => el.classList.remove('active'))
        const menuList = document.getElementById(el.getAttribute('data-state'));
        menuList.classList.add('active')
    })
})
