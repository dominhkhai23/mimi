const heart2 = document.querySelectorAll('.content2_product-heart')
const arrowUp = document.querySelector('.content_index6-recommend-up')
const text = document.querySelector('.content_index6-recommend-text')
const heartBtn = document.querySelector('.content_index6-heart')
const voucher = document.querySelectorAll('.content_index6-discount-code')

var isRed = false
heart2.forEach((heart) => {
    heart.addEventListener('click', (e) => {
         if(!isRed) {
            e.target.style.color = 'red'
            isRed = true
         } else {
            e.target.style.color = 'black'
            isRed = false
         }
    })
})

heartBtn.addEventListener('click', (e) => {
      if(!isRed) {
         e.target.style.color = 'red'
         isRed = true
      } else {
         e.target.style.color = 'black'
         isRed = false
      }
})


var changeArrow = false
arrowUp.addEventListener('click', () => {
   if(!changeArrow) {
      arrowUp.innerHTML = ''
      arrowUp.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'
      text.style.display = 'none'
      changeArrow = true
   } else {
      arrowUp.innerHTML = ''
      arrowUp.innerHTML = '<i class="fa-solid fa-angle-up"></i>'
      text.style.display = 'block'
      changeArrow = false
   }

})

var isBlue = false
voucher.forEach(item => {
   item.addEventListener('click', (e) => {
      if(!isBlue) {
         e.target.style.backgroundColor = 'blue'
         e.target.style.color = 'white'
         isBlue = true
      } else {
         e.target.style.backgroundColor = 'white'
         e.target.style.color = 'black'
         isBlue = false
      }
   })

})

