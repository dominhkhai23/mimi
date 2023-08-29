var scrollBtnIndex5 = document.querySelector('.btn_index5-scroll')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        scrollBtnIndex5.classList.add('open')
    } else {
        scrollBtnIndex5.classList.remove('open')
    }
})

scrollBtnIndex5.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

