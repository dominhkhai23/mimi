var scrollBtnIndex3 = document.querySelector('.btn_index3-scroll')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        scrollBtnIndex3.classList.add('open')
    } else {
        scrollBtnIndex3.classList.remove('open')
    }
})

scrollBtnIndex3.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

