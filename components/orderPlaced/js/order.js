const OrderData = JSON.parse(localStorage.getItem('dataOrder'))
const main = document.querySelector('.col.l-9.m-12.c-12')
var messageText = document.querySelector('.content_message-text')
var coverText = document.querySelector('.content_message-text-cover')
var NameUser = JSON.parse(localStorage.getItem('users'))
var nameRender = document.querySelector('.content_project-name')
var photo = document.querySelector('.content_project-photo')
var userDefault = document.querySelector('.content_project-icon')

if(NameUser) {
    photo.style.display = 'block'
    userDefault.style.display = 'none'
    nameRender.innerText = NameUser.name
}

function renderOrder() {
    main.innerHTML = ''
    if(OrderData) {
        var html = OrderData.map((data, index) => {
            var price = parseInt(data.price.replace('đ', ''))
            var quantity = parseInt(data.quantity.replace('số lượng:', ''))
            var total = (price * quantity).toLocaleString("vi-VN") + 'đ'
            var orderHtml = index === 0 ? '<h3 class="content_orderPlaced-item">Đơn hàng đã Đặt</h3>' : ''
            return `
            <div class="content_orderPlaced">
                 ${orderHtml}
                <div class="content_orderPlaced-address">
                    <div class="content_orderPlaced-address-cover">
                        <span class="content_orderPlaced-icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </span>
                        <h3 class="content_orderPlaced-address-item"> 
                            Địa chỉ đặt hàng:
                        </h3>
                    </div>
                    <p class="content_orderPlaced-text">
                        ${data.address}
                    </p>
                </div>
                <div class="content_orderPlaced-product">
                    <div class="content_orderPlaced-cover">
                        <div class="content_orderPlaced-photo">
                            <img src="${data.img}" alt="" class="content_orderPlaced-img">
                        </div>
                        <div class="content_orderPlaced-information">
                            <h4 class="content_orderPlaced-name">
                            ${data.name}
                            </h4>
                            <div class="content_orderPlaced-quantity">
                                ${data.quantity}
                            </div>
                        </div>
                        <p class="content_orderPlaced-price">
                            ${total}
                        </p>
    
                        <p class="content_orderPlaced-abort">
                            Đã Hủy
                        </p>
                    </div>
                    <div class="content_orderPlaced-btn">
                        <button class="repurchase-btn">
                            <a href="../cart/cart.html" class="repurchase-btn-link">
                                Mua lại
                            </a>
                        </button>
                        <button class="cancel-btn">
                            Hủy Đơn đặt hàng 
                        </button>
                        <button class="contact-btn">
                            Liện hệ Shop
                        </button>
                    </div>
                </div>
            </div>
            
            `
        })
        
        main.innerHTML = html.join()
    
        const contactBtn = document.querySelectorAll('.contact-btn')
        const Chat = document.querySelector('.content_message-chat')
        const cancelBtn = document.querySelectorAll('.cancel-btn')
        const abort = document.querySelectorAll('.content_orderPlaced-abort')
        
        contactBtn.forEach((contact) => {
            contact.addEventListener('click', (e) => {
                Chat.style.display = 'block'
                var children = e.target.parentElement
                var cover = children.previousElementSibling
                var img = cover.querySelector('.content_orderPlaced-img').src
                var priceText = cover.querySelector('.content_orderPlaced-price').innerText
                var price = parseFloat(priceText.replace('đ', '')).toLocaleString("vi-VN") + "đ"
                RenderMessage(img, price)
            })
        })
    
        cancelBtn.forEach((cancel, index) => {
            cancel.addEventListener('click', () => {
                abort[index].style.display = 'block'
            })
        })
    } else {
        const Item = document.createElement('h3')
        Item.classList.add('content_orderPlaced-item')
        Item.innerText = 'Đơn hàng đã Đặt'

        const noProduct = document.createElement('div')
        noProduct.classList.add('no-product')
 
        const img = document.createElement('img')
        img.classList.add('no-product-img')
        img.src = 'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/5fafbb923393b712b96488590b8f781f.png'
        
        const noBuy = document.createElement('p')
        noBuy.classList.add('no-buy')
        noBuy.innerText = 'Chưa có sản phẩm nào'

        main.appendChild(Item)
        noProduct.appendChild(img)
        noProduct.appendChild(noBuy)
        main.appendChild(noProduct)
    }
}

renderOrder()


function RenderMessage(img, price) {
    coverText.innerHTML = ''
    var Default = document.createElement('div')
    Default.classList.add('content_message-text-default')
    Default.innerHTML = `
        <div class="content_message-text-photo">
            <img src="${img}" alt="" class="content_message-text-img">
        </div>
        <div class="content_message-text-description">
            <p class="content_message-text-Id">
                ID:21072964QH6G1G
            </p>
            <p class="content_message-text-total">
                Tổng đơn hàng: ${price}
            </p>
        </div>

    `
    coverText.appendChild(Default)
    messageText.appendChild(coverText)
}