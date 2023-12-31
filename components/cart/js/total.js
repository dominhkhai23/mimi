var inputs = document.querySelectorAll('.input');
var productPrices = document.querySelectorAll('.content_product-price');
var quantity = document.querySelectorAll('.content_product-input')
var totalText = document.querySelector('.content_product-total-text')
var btnDelete = document.querySelectorAll('.content_product-delete')
var total = 0;

inputs.forEach(function(input, index) {
    input.addEventListener('change', function() {
        if (this.checked) {
            var priceText = productPrices[index].innerText;
            var price = parseInt(priceText.replace('Giá:', '').replace('đ', '')) ;
            
            var number = parseInt(quantity[index].value);
            total += (price *= 1000) * number;
        } else {
            var priceText = productPrices[index].innerText;
            var price = parseInt(priceText.replace('Giá:', '').replace('đ', ''));
            var number = parseInt(quantity[index].value)
            total -= (price *= 1000) * number;
        }
        var formattedAmount = total.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
        totalText.innerText = 'Tổng số tiền: ' + formattedAmount;
    });
});


Array.from(btnDelete).forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    var productContainer = e.target.closest('.content_product-more');
    productContainer.remove()
    var data = JSON.parse(localStorage.getItem('information'));
    var count = JSON.parse(localStorage.getItem('count'));
    if (index !== -1) {
        data.splice(index, 1);
    }
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('information', JSON.stringify(data));
})
})









    