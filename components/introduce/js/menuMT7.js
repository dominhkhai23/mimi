const menuBtnIndex2 = document.querySelector('.header_index7-navbar-menu')
const modal3 = document.querySelector('.modal3') 
const modal3Overlay = document.querySelector('.modal3_overlay') 
menuBtnIndex2.addEventListener('click', () => {
  modal3.style.display = 'block'
})

modal3Overlay.addEventListener('click', () => {
  modal3.style.display = 'none'
})

