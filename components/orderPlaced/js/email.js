var inputFooter = document.querySelector('.footer-input') 
var Btn = document.querySelector('.footer-btn')
var errorMessage = document.querySelector('.footer-messenger')

Btn.onclick = function() {
    var inputs = input.value
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regex.test(inputs)) {
        errorMessage.innerText = ''
        alert('bạn đã đăng ký thành công :))')
    } else {
        errorMessage.innerText = 'vui lòng nhập đúng email' 
    }
}

inputFooter.oninput = function() {
    errorMessage.innerText = ''
}

inputFooter.onkeyup = function(e) {
    var inputs = input.value
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    switch(e.keyCode) {
        case 13:
        if(!inputs.match(regex)) {
            errorMessage.innerText = 'vui lòng nhập đúng email'
        } else {
            errorMessage.innerText = ''
            alert('bạn đã đăng ký thành công :))')
        }
    }   
}


