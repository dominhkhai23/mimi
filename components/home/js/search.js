const searchModal = document.querySelector('.modal_search-icon')
const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal_overlay')
const searchHeader = document.querySelector('.header_navbar-search')
const searchBar = document.querySelector('.header_index2-navbar-search')
console.log(searchBar)

searchHeader.addEventListener('click', () => {
    modal.classList.add('open')
})

searchModal.addEventListener('click', () => {
    modal.classList.remove('open')
})

modalOverlay.addEventListener('click', () => {
    modal.classList.remove('open')
})


