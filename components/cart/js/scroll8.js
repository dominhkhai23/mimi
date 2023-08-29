var scrollBtnIndex7 = document.querySelector('.btn_index-scroll')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        scrollBtnIndex7.classList.add('open')
    } else {
        scrollBtnIndex7.classList.remove('open')
    }
})

scrollBtnIndex7.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

