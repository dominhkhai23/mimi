var btnBuy = document.querySelector('.content_index6-buy')
var modal4 = document.querySelector('.modal4')
var modal4Delete = document.querySelector('.modal4_body-delete')
var overlay4 = document.querySelector('.modal4_overlay')
var information = document.querySelector('.modal4_body-detail')
var address = document.querySelector('#address')
var btnPut = document.querySelector('.modal4_body-btn')
var cartItems = [];
btnBuy.addEventListener('click', () => {
    modal4.classList.add('open')
    var img = document.querySelector('.content_index6-main-photo-img2').src;
    var name = document.querySelector('.content_index6-heading').innerText;
    var quantity = document.querySelector('.content_index6-input').value;
    var priceText = document.querySelector('.content_index6-price').innerText;
    var price = parseInt(priceText.replace('Giá:', '').replace('đ', ''));
    var total = price * quantity;
    var existingItem = cartItems.find(function(item) {
        return item.name === name
    })

    if(existingItem) {
        existingItem.quantity = parseFloat(existingItem.quantity) + 1
        existingItem.total += total
    } else {
        cartItems.push({
            img: img,
            name: name,
            quantity: parseInt(quantity),
            total: total
        })
    }

    Render()
})

window.localStorage.setItem('informationBay', JSON.stringify(cartItems))

modal4Delete.addEventListener('click', () => {
    modal4.classList.remove('open')
})

overlay4.addEventListener('click', () => {
    modal4.classList.remove('open')
})

function Render() {
     // Xóa nội dung hiện tại của giỏ hàng
     information.innerHTML = '';

     // Duyệt qua từng sản phẩm trong giỏ hàng và hiển thị lên giao diện
     cartItems.forEach(item => {
         const modalItem = document.createElement('div');
         modalItem.classList.add('modal4_body-detail-information');
 
         const imgs = document.createElement('img');
         imgs.classList.add('modal4_body-detail-img');
         imgs.src = item.img;
 
         const description = document.createElement('div');
         description.classList.add('modal4_body-detail-description');
         description.innerHTML = `
             <h4 class="modal4_body-detail-name">
                ${item.name}
             </h4>
             <p class="modal4_body-detail-quantity">
                 số lượng: ${item.quantity}
             </p>
         `;
 
         modalItem.appendChild(imgs);
         modalItem.appendChild(description);
         information.appendChild(modalItem);


         var modalTotals = document.querySelector('.modal4_body-total')
         modalTotals.innerText = 'Tổng số tiền: ' + item.total + 'đ'
     });
}

function check() {
    address.addEventListener('blur', (e) => {
       if(!e.target.value) {
         e.target.style.border = '1px dashed red'
       } 
    })
    
    address.addEventListener('input', (e) => {
        if(e.target.value) {
            e.target.style.border = '1px dashed #ccc'
        }
    })
}

check()

btnPut.addEventListener('click', (e) => {
    
    e.target.innerText= ''
    e.target.innerHTML = `
       <i class="fa-solid fa-circle-notch"></i>
    `
    var around = document.querySelector('.fa-solid.fa-circle-notch')
    around.style.animation = 'Around 1s linear infinite'
    setTimeout(function() {
        e.target.innerHTML = '' + 'Đặt hàng'          
    }, 2000)
    

    if (address.value === '') {
        address.style.border = '1px dashed red';
        setTimeout(function() {
            alert('vui lòng nhập địa chỉ')
        }, 300)
    } else {
        address.style.border = '1px dashed black';
        address.value = ''
        modal4.classList.remove('open')
        setTimeout(function() {
            alert('Đặt hàng thành công')
        }, 1000)
    }
})
