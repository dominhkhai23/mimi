var input = document.querySelector('.modal_search-input')
var row = document.querySelector('.row')
var col = document.querySelectorAll('.col.l-2-4.content2_active')
var modalSearch = document.querySelector('.modal')
var modalSearchBtn = document.querySelector('.modal_search-btn')
var modalSuggest = document.querySelector('.modal_search-suggest')
var content2 = document.querySelector('.content2')
var slider = document.querySelector('.slider')
var sliderFooter = document.querySelector('.slider_footer')
var content = document.querySelector('.content')
var headerSearch = document.querySelector('.header_navbar-search')





input.addEventListener('keyup', (event) => {
   const valueInput = event.target.value.trim().toLowerCase()
   switch(event.keyCode) {
      case 13: 
        Product(valueInput)
        modalSearch.classList.add('close')
        input.value = ''
        modalSuggest.classList.remove('open4')
        content2.style.display = 'block'
        slider.style.display = 'none'
        sliderFooter.style.display = 'none'
        content.classList.add('close3')
        break;
      }
})



modalSearchBtn.addEventListener('click', () => {
   var searchValue = input.value
   if(searchValue) {
      Product(searchValue)
      modalSearch.classList.add('close')
      input.value = ''
      modalSuggest.classList.remove('open4')
      content2.style.display = 'block'
      slider.style.display = 'none'
      sliderFooter.style.display = 'none'
      content.classList.add('close3')
      content3.style.display = 'none'
      
   } else {
      modalSearch.classList.remove('close')
      alert('vui lòng nhập tên sản phẩm')
   }
})

function Product(value) {
   col.forEach(product => {
      if(product.innerText.toLowerCase().includes(value)) {
         product.style.display = 'block'
      } else {
         product.style.display = 'none'
      }
   })
}

input.addEventListener('input', (e) => {
   var valueInput = e.target.value.trim().toLowerCase()
   var list = [ 'Áo sơ mi kẻ', 'Áo thun nam',
    'Áo khoác nam','Quần jeans', 'Quần ngắn nam', 'Quần dài nam', ]

   modalSuggest.innerHTML = ''
   list.forEach(listItem => {
      if(listItem.toLowerCase().includes(valueInput)) {
         var listData = document.createElement('li')
         listData.classList.add('modal_search-suggest-item')
         var att = document.createAttribute("type")
         att.value = `${listItem}`
         listData.setAttributeNode(att)
         listData.innerHTML = listItem
         modalSuggest.appendChild(listData)
         modalSuggest.classList.add('open4')
         var listType = document.querySelectorAll('.modal_search-suggest-item')
         listType.forEach((item) => {
            item.onclick = function (e) {
               var type = e.target.type
               Array.from(col).filter(item => {
                 var type2 = item.getAttribute('type')
                
                 if(type2 === type) {
                     item.style.display = 'block'
                 } else {
                     item.style.display = 'none'
                 }
               })
               modalSearch.classList.add('close')
               input.value = ''
               modalSuggest.classList.remove('open4')
               content2.style.display = 'block'
               slider.style.display = 'none'
               sliderFooter.style.display = 'none'
               content.style.display = 'none'
            }
         })
      }
      if(!valueInput) {
         modalSuggest.innerHTML = ''
      }
   })
})


headerSearch.addEventListener('click', () => {
   modalSearch.classList.remove('close')
})



   