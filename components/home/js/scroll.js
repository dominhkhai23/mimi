var scrollBtn = document.querySelector('.scroll-btn')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
      scrollBtn.classList.add('open')
    } else {
        scrollBtn.classList.remove('open')
    }
})

scrollBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

