var cartBody = document.querySelector('.cart-more-body')
var color = document.querySelectorAll('.content_index6-color-choose')
var btnMore = document.querySelector('.content_index6-more')
var cartItemCount = document.querySelector('.cart-item-count')
var count = 1
if (cartBody.children.length === 0) {
  const cartNot = document.createElement('div')
  cartNot.classList.add('cart-not-product')
  const emptyCartMessage = document.createElement('p');
  emptyCartMessage.classList.add('cart-more-text')
  emptyCartMessage.textContent = 'Không có sản phẩm.';
  cartNot.appendChild(emptyCartMessage)
  cartBody.appendChild(cartNot);
}

btnMore.addEventListener('click', () => {
   count++;
  ;
  if( count > 0) {
    cartItemCount.style.display = 'block';
    cartItemCount.innerText = count
  }
  var price = document.querySelector('.content_index6-price').innerText
  var img = document.querySelector('.content_index6-main-photo-img2').src
  var name = document.querySelector('.content_index6-heading').innerText
  var quantity = document.querySelector('.content_index6-input').value 
  var selectedColor = JSON.parse(localStorage.getItem('color'))
  var existingInformation = JSON.parse(localStorage.getItem('information')) || [];
  var product = {
    name: name,
    img: img,
    price: price,
    quantity: quantity,
    color: selectedColor
  }
  var existingProduct = existingInformation.find(item => {
    return item.name === name;
  });

  if (existingProduct) {
    existingProduct.quantity = parseInt(existingProduct.quantity) + 1
  } else {
    existingInformation.push(product);
  }
  window.localStorage.setItem('count', JSON.stringify(count));
  window.localStorage.setItem('information', JSON.stringify(existingInformation))
  cart(existingInformation)
})





function cart(existingInformation) {
    if(cartBody.children.length === 1 && cartBody.children[0].classList.contains('cart-not-product')) {
        var cartMore = document.querySelector('.cart-more-text').closest('.cart-not-product')
        cartMore.remove()
    } 
     
    cartBody.innerHTML = ''
    existingInformation.forEach(data => {
       
      var cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
    
      const cartPhoto = document.createElement('div');
      cartPhoto.classList.add('cart-more-photo');
      cartPhoto.innerHTML = `
        <img src="${data.img}" alt="" class="cart-more-img">
      `;
    
      const cartInformation = document.createElement('div');
      cartInformation.classList.add('cart-more-information');
      cartInformation.innerHTML = `
        <h4 class="cart-more-name">
          ${data.name}
        </h4>
        <span class="cart-more-price">
          ${data.price}
        </span>
      `;
    
      cartItem.appendChild(cartPhoto);
      cartItem.appendChild(cartInformation);
      cartBody.appendChild(cartItem);
      
    })
    
 }
