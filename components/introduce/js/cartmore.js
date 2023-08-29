var information = JSON.parse(localStorage.getItem('information'));
var count = JSON.parse(localStorage.getItem('count'));
var cartBody = document.querySelector('.cart-more-body')
var cartCount = document.querySelector('.cart-item-count')
if(cartBody.children.length === 0) {
    const emptyCartMessage = document.createElement('div');
    emptyCartMessage.classList.add('cart-more-text')
    emptyCartMessage.textContent = 'Không có sản phẩm.';
    cartBody.appendChild(emptyCartMessage);
}

if(count) {
 cartCount.innerText = count
 cartCount.style.display = 'block'; 

}

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