const searchBtn = document.querySelector('.header-navbar-search')
var modal = document.querySelector('.modal')
var modalSearch = document.querySelector('.modal_search-icon')
var modalOverlay = document.querySelector('.modal_overlay')
searchBtn.onclick = function(event) {
  modal.style.display = 'block'
  
}

modalSearch.onclick = function() {
  modal.style.display = 'none'
  
}

modalOverlay.onclick = function() {
  modal.style.display = 'none'
  
}