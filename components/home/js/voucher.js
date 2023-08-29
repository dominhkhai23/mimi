const modal2 = document.querySelector('.modal2');
const btnCopy = document.querySelectorAll('.btn-copy');
const btnCondition = document.querySelectorAll('.content_discount-open')
const modalOverlay2 = document.querySelector('.modal2_overlay')
const modal2Tatol = document.querySelector('.modal2_tatol')

const listData = 'http://localhost:3000/data'

fetch(listData)
 .then((response) => {
    return response.json()
})

.then((data) => {
   btnCondition.forEach((button, index) => {
      console.log(index)
      button.addEventListener('click', () => {
        modal2.classList.add('open2');
        const html = data.filter((item) => item.id === index);
        render(html);
      });
    });
})



for(var btn of btnCopy) {
   btn.addEventListener('click', function(e) {
      var button = e.target
      button.innerText = ''
      button.innerText = 'Đã sao chép'
      setTimeout(function() {
        button.innerText = 'Sao chép'
      }, 3000)
   })
}



function render(html) {
   modal2Tatol.innerHTML = ''
   html.forEach((item2) => {
      var modal2Condition = document.createElement('div')
      modal2Condition.classList.add('modal2_condition')
      modal2Condition.innerHTML = `
            <div class="modal2_condition-header">
               <span class="modal2_condition-icon">
                     <i class="fa-solid fa-xmark"></i>
               </span>
               <h2 class="modal2_condition-heading">${item2.nameCode}</h2>
            </div>
            <div class="modal2_condition-body">
               <span class="modal2_condition-promo-code">${item2.promoCode}</span>
               <span class="modal2_condition-description">${item2.description}</span>
            </div>
            <div class="modal2_condition-button">
               <button class="button-close">Đóng</button>
               <button class="button-copy">Sao chép</button>
            </div>
      `
      modal2Tatol.appendChild(modal2Condition)
   })
   
   var buttonClose = document.querySelector('.button-close')
   var modalX = document.querySelector('.modal2_condition-icon')
   var buttonCopy = document.querySelector('.button-copy')

   buttonClose.addEventListener('click', () => {
      modal2.classList.remove('open2')
   })
  
   modalX.addEventListener('click', () => {
     modal2.classList.remove('open2')
   })

   buttonCopy.addEventListener('click', (e) => {
      var button = e.target
      button.innerText = ''
      button.innerText = 'Đã sao chép'
      setTimeout(function() {
        button.innerText = 'Sao chép'
      }, 3000)
   })
   
}
modalOverlay2.addEventListener('click', () => {
   modal2.classList.remove('open2')
})


