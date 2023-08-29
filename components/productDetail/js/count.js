var plus = document.querySelector('#increase')
var minus = document.querySelector('#decrease')
var inputCheck = document.querySelector('.content_index6-input')

plus.onclick = function() {
    inputCheck.value = parseInt(inputCheck.value) + 1;
}

minus.onclick = function() {
    inputCheck.value = parseInt(inputCheck.value) - 1;
    if(inputCheck.value < 1) {
        inputCheck.value = 1
    }
}