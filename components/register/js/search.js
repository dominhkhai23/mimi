var searchBtn = document.querySelector('.header_index0-navbar-search')
var modal = document.querySelector('.modal')
var modalSearch = document.querySelector('.modal_search-icon')
var modalOverlay = document.querySelector('.modal_overlay')
searchBtn.onclick = function() {
  modal.classList.add('open')
}

modalSearch.onclick = function() {
    modal.classList.remove('open')
}

modalOverlay.onclick = function() {
    modal.classList.remove('open')
}