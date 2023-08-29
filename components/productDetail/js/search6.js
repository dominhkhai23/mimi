var searchBtnIndex6 = document.querySelector('.header_index6-navbar-search')
console.log(searchBtnIndex6)
var modal = document.querySelector('.modal')
var modalSearch = document.querySelector('.modal_search-icon')
var modalOverlay = document.querySelector('.modal_overlay')
searchBtnIndex6.onclick = function() {
  modal.classList.add('open')
}

modalSearch.onclick = function() {
    modal.classList.remove('open')
}

modalOverlay.onclick = function() {
    modal.classList.remove('open')
}