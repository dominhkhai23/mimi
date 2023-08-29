const prevBtn = document.querySelector('.slider_icon-prev')
const nextBtn = document.querySelector('.slider_icon-next')
const imgSlider = document.querySelector('.slider_img')
const dostBtn = document.querySelectorAll('.slider_dost') 

const img = [
    'https://lh3.googleusercontent.com/0-djQBvRV1Ak4ODxma3eR9Ly5thVQxJ5FOqgh-jgJEqsUmzeZPATotZJ0vddMq5QD6kGLVDIaDFouOoR0iAjqZVjQjNWkJ5uRSYyvaqCNLDgkVKSORJsvQt9bwBBYmXeMd2AQYfJ3Q=w1120-h802-no',
    'https://noithatnamviet.com/wp-content/uploads/2022/06/z3493350511815_0a00ecd1f6cad7a31d0e90acd680f0f4.jpg',
    'https://noithatnamviet.com/wp-content/uploads/2022/06/z3493354436041_693ad27dd84f26847b70e006fcd1e55a.jpg'
]


var index = 0
dostBtn.forEach((dost, index) => {
    dost.addEventListener('click', (e) => {
        dostBtn.forEach(item => {
            item.classList.remove('active')
        })
        var dataIndex = parseInt(e.target.dataset.index)
        index = dataIndex 
        imgSlider.src = img[index]
        e.target.classList.add('active')
    })
})

nextBtn.addEventListener('click', () => {
    dostBtn.forEach(item => {
        item.classList.remove('active')
    })
    imgSlider.style.animation = ''
    index++
    if(index >= img.length) {
        index = 0
    }
    imgSlider.src = img[index]
    setInterval(() => {
        imgSlider.style.animation = 'slideAnimation 1s linear'
    }, 400);
    dostBtn[index].classList.add('active')
    
})

prevBtn.addEventListener('click', () => {
    dostBtn.forEach(item => {
        item.classList.remove('active')
    })
    imgSlider.style.animation = ''
    index--
    if(index < 0) {
        index = img.length - 1
    }
    console.log(img[index])
    imgSlider.src = img[index]
    setInterval(() => {
        imgSlider.style.animation = 'slideAnimation 1s linear'
    }, 400);
    dostBtn[index].classList.add('active')
})

setInterval(() => {
    nextBtn.click()
}, 10000);

