var scrollBtnIndex9 = document.querySelector('.btn_index9-scroll')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        scrollBtnIndex9.classList.add('open')
    } else {
        scrollBtnIndex9.classList.remove('open')
    }
})

scrollBtnIndex9.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

