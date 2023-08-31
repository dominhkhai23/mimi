var inputIndex3 = document.querySelector('.footer_index3-input') 
var Btn = document.querySelector('.footer_index3-btn')
var errorMessage = document.querySelector('.footer_index3-messenger')

Btn.onclick = function() {
    var inputs = inputIndex3.value
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regex.test(inputs)) {
        errorMessage.innerText = ''
        alert('bạn đã đăng ký thành công :))')
    } else {
        errorMessage.innerText = 'vui lòng nhập đúng email' 
    }
}

inputIndex3.oninput = function() {
    errorMessage.innerText = ''
}

inputIndex3.onkeyup = function(e) {
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


