$(document).ready(() => {
    $(window).scroll( () => {
        if($(this).scrollTop()) {
            $('header').addClass('sticky')
        } else {
            $('header').removeClass('sticky')
        }
    })
})