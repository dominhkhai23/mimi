var information = JSON.parse(localStorage.getItem('information'));
var contentCart = document.querySelector('.content_product-cover')
if(contentCart.children.length === 0) {
  const notProduct = document.createElement('p');
  notProduct.classList.add('not-product');
  notProduct.innerText = 'không có sản phẩm nào'
  contentCart.appendChild(notProduct)
}

function Render() {
  var More = information.map(data => {
     var price = data.price.replace('Giá:', '')
    return `
    <div class="content_product-more">
                <div class="content_product-head">
                    <input type="checkbox" class="input">

                    <div class="content_product-img">
                        <img src="${data.img}" alt="" class="content_product-photo">
                    </div>

                    <h4 class="content_product-name">
                       ${data.name}
                    </h4>
                </div>
                <div class="content_product-end">
                    <div class="content_product-quantity">
                      <button class="quantity-minus">
                         <i class="fa-solid fa-minus"></i>
                      </button> 
                      <input type="number" min="1" max="100" value="${data.quantity}" class="content_product-input">
                      <button class="quantity-add">
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <p class="content_product-price">
                        ${price}
                    </p>
                    <p class="content_product-delete">
                        xóa
                    </p>
                </div>
    </div>
    `
  })
  
   contentCart.innerHTML = More.join('')
}

Render()


var add = document.querySelectorAll('.quantity-add')
var minus = document.querySelectorAll('.quantity-minus')
var quantityProduct = document.querySelectorAll('.content_product-quantity')

  add.forEach((btnAdd, index) => {
    btnAdd.addEventListener('click', (e) => {
      var children = e.target.parentElement
      var quality= children.parentElement
      var input = quality.querySelector('.content_product-input')
      input.value = parseInt(input.value) + 1
      var inputValue = input.value
      var information = JSON.parse(localStorage.getItem('information'));
      information[index].quantity = inputValue;
      localStorage.setItem('information', JSON.stringify(information));
    })
  })
       
  minus.forEach((btnMinus, index) => {
    btnMinus.addEventListener('click', (e) => {
      var children = e.target.parentElement
      var quality= children.parentElement
      var input = quality.querySelector('.content_product-input')
      input.value = parseInt(input.value) - 1
      if(input.value <= 0) {
        input.value = 1
      }
      var inputValue = input.value
      var information = JSON.parse(localStorage.getItem('information'));
      information[index].quantity = inputValue;
      localStorage.setItem('information', JSON.stringify(information));
    })
  })

 

  