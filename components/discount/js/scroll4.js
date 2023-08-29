var scrollBtnIndex4 = document.querySelector('.btn_index4-scroll')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        scrollBtnIndex4.classList.add('open')
    } else {
        scrollBtnIndex4.classList.remove('open')
    }
})

scrollBtnIndex4.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

