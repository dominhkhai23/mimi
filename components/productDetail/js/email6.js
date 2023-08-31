var inputIndex6 = document.querySelector('.footer_index6-input') 
var Btn = document.querySelector('.footer_index6-btn')
var errorMessage = document.querySelector('.footer_index6-messenger')

Btn.onclick = function() {
    var inputs = inputIndex6.value
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regex.test(inputs)) {
        errorMessage.innerText = ''
        alert('bạn đã đăng ký thành công :))')
    } else {
        errorMessage.innerText = 'vui lòng nhập đúng email' 
    }
}

inputIndex6.oninput = function() {
    errorMessage.innerText = ''
}

inputIndex6.onkeyup = function(e) {
    var inputs = inputIndex6.value
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


