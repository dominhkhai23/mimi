const heart2 = document.querySelectorAll('.content2_product-heart')

var isRed = false
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


