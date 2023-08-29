var scrollBtnIndex2 = document.querySelector('.btn_index2-scroll-icon')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        scrollBtnIndex2.classList.add('open')
    } else {
        scrollBtnIndex2.classList.remove('open')
    }
})

scrollBtnIndex2.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

