var modal4 = document.querySelector('.modal4')
var modal4Delete = document.querySelector('.modal4_body-delete')
var overlay4 = document.querySelector('.modal4_overlay')
var informationClothes = document.querySelector('.modal4_body-detail')
const inputQuantity = document.querySelectorAll('.input')
var Buy = document.querySelector('.content_product-buy')
var inputElement = document.querySelector('.address-input')
var OrderBtn = document.querySelector('.modal4_body-btn')


Buy.addEventListener('click', () => {
    modal4.classList.add('open')
})

modal4Delete.addEventListener('click', () => {
    modal4.classList.remove('open')
})

overlay4.addEventListener('click', () => {
    modal4.classList.remove('open')
})

inputQuantity.forEach((btn, index) => {
   btn.addEventListener('change', (e) => {
     if(e.target.checked) {
        var img = btn.parentElement.querySelector('.content_product-photo').src;
        var name = btn.parentElement.querySelector('.content_product-name').innerText
        var parent = btn.parentElement.nextElementSibling;
        var quantity = parent.querySelector('.content_product-input').value;
        var total = document.querySelector('.content_product-total-text').innerText;
        Render(img, name, quantity, total)
     } else {
        var description = document.querySelector('.modal4_body-detail-description');
        if(description) {
          description.parentElement.remove(); 
        }
        var modalTotals = document.querySelector('.modal4_body-total')
        if(modalTotals) {
            modalTotals.innerText = '' + 'Tổng số tiền:'
        }
       
     }
   })
})


function Render(img, name, quantity, total) {
    const modalItem = document.createElement('div')
    modalItem.classList.add('modal4_body-detail-information')

    const imgs = document.createElement('img')
    imgs.classList.add('modal4_body-detail-img')
    imgs.src = img
     
    const description = document.createElement('div')
    description.classList.add('modal4_body-detail-description')
    description.innerHTML = `
        <h4 class="modal4_body-detail-name">
           ${name}
        </h4>
        <p class="modal4_body-detail-quantity">
            số lượng: ${quantity}
        </p>
    
    `
    var modalTotals = document.querySelector('.modal4_body-total')
    modalTotals.innerText = total
    modalItem.appendChild(imgs)
    modalItem.appendChild(description)
    informationClothes.appendChild(modalItem)
};

function check() {
    inputElement.addEventListener('blur', (e) => {
       if(!e.target.value) {
         e.target.style.border = '1px dashed red'
       } 
    })
    
    inputElement.addEventListener('input', (e) => {
        if(e.target.value) {
            e.target.style.border = '1px dashed #ccc'
        }
    })
}

check()


OrderBtn.onclick = function(e) {
    e.target.innerText= ''
    e.target.innerHTML = `
       <i class="fa-solid fa-circle-notch"></i>
    `
    var around = document.querySelector('.fa-solid.fa-circle-notch')
    around.style.animation = 'Around 1s linear infinite'
    setTimeout(function() {
        e.target.innerHTML = '' + 'Đặt hàng'          
    }, 2000)
    
    var isValid = !information.children[1] && !information.classList.contains('modal4_body-detail-information') || inputElement.value === ''
    if(isValid) {
        inputElement.style.border = '1px dashed red';
        setTimeout(function() {
            alert('Bạn chưa nhập địa chỉ hoặc chưa chọn sản phẩm')
        }, 300)
    } else {
        inputElement.style.border = '1px dashed black';
        modal4.classList.remove('open')
        setTimeout(function() {
            alert('Đặt hàng thành công')
        }, 1000)
        createData()
        inputElement.value = ''
    }
    
    function createData() {
        const imgBought = document.querySelectorAll('.modal4_body-detail-img');
        const quantityBought = document.querySelectorAll('.modal4_body-detail-quantity');
        const nameBought = document.querySelectorAll('.modal4_body-detail-name');
        const addressValue = inputElement.value;
        const priceBought = document.querySelectorAll('.content_product-price');
        var bought = []
        imgBought.forEach((imgData, index) => {
            var img = imgData.src;
            var quantity = quantityBought[index].innerText.trim();
            var name = nameBought[index].innerText.trim();
            var price = priceBought[index].innerText;
            takeData(img, quantity, name, price);
        });
    
        function takeData(img, quantity, name, price) {
            var data = {
                img: img,
                quantity: quantity,
                name: name,
                price: price,
                address: addressValue
            };
    
            bought.push(data); 
        }

       window.localStorage.setItem('dataOrder', JSON.stringify(bought));
        
    }
}


