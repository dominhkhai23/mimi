var cartBody = document.querySelector('.cart-more-body')
var cartCount = document.querySelector('.cart-item-count')
var modalCount = document.querySelector('.modal_cart-item-count')
var modalBody = document.querySelector('.modal_cart-more-body')
var information = JSON.parse(localStorage.getItem('information'));
var count = JSON.parse(localStorage.getItem('count'));

if(cartBody.children.length === 0 && modalBody.children.length === 0) {
    const emptyCartMessage = document.createElement('div');
    emptyCartMessage.classList.add('cart-more-text')
    emptyCartMessage.textContent = 'Không có sản phẩm.';
    cartBody.appendChild(emptyCartMessage);
    modalBody.appendChild(emptyCartMessage);
}


   

if(count) {
    cartCount.innerText = count
    cartCount.style.display = 'block'; 
    modalCount.innerText = count
    modalCount.style.display = 'block'; 
}

function renderCart() {
    var text = information.map((info) => {
        return `
        <div class="cart-item">
            <div class="cart-more-photo">
               <img src="${info.img}" alt="" class="cart-more-img">
            </div>
            <div class="cart-more-information">
            <h4 class="cart-more-name">
               ${info.name}
            </h4>
            <span class="cart-more-price">
               ${info.price}
            </span>
            </div>
        </div>
        `
    })
    cartBody.innerHTML = text.join('')

}

renderCart()

function renderCartModal() {
    var newText = information.map((info) => {
        return `
        <div class="modal_cart-item">
            <div class="modal_cart-more-photo">
               <img src="${info.img}" alt="" class="modal_cart-more-img">
            </div>
            <div class="modal_cart-more-information">
            <h4 class="modal_cart-more-name">
               ${info.name}
            </h4>
            <span class="modal_cart-more-price">
               ${info.price}
            </span>
            </div>
        </div>
        `
    })
    
    modalBody.innerHTML = newText.join('')
}

renderCartModal()

