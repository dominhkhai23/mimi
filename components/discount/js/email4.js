var inputFooter = document.querySelector('.footer_index4-input') 
var Btn = document.querySelector('.footer_index4-btn')
var errorMessage = document.querySelector('.footer_index4-messenger')

Btn.onclick = function() {
    var inputs = inputFooter.value
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

input.onkeyup = function(e) {
    var inputs = inputFooter.value
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


