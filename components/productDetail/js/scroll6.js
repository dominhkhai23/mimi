var scrollBtnIndex6 = document.querySelector('.btn_index6-scroll')
console.log(scrollBtnIndex6)

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        scrollBtnIndex6 .classList.add('open')
    } else {
        scrollBtnIndex6 .classList.remove('open')
    }
})

scrollBtnIndex6.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

