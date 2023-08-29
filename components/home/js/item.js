const productItem = document.querySelectorAll('.content_product-item')
const products  = document.querySelectorAll('.gird .product')
const hearts = document.querySelectorAll('.content_product-heart')
const heart2 = document.querySelectorAll('.content2_product-heart')

productItem.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        document.querySelector('.content_product-item.active').classList.remove('active')
        products.forEach((product) => {
            product.classList.remove('active')
        })

        e.target.classList.add('active')
        products[index].classList.add('active')
    })
}) 

var isRed = false
hearts.forEach((heart) => {
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
