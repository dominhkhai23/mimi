const inputName = document.querySelector('.name')
const inputEmail = document.querySelector('.email')
const inputPhone = document.querySelector('.phone')
const btn = document.querySelector('.btn')

function Run() {
  inputName.addEventListener('blur', (e) => {
    var inputValue = e.target.value
    if(!inputValue) {
        e.target.style.border = '2px solid red'
    }
  })
  inputName.oninput = function(e) {
    e.target.style.border = '2px solid black'
  }
  inputEmail.addEventListener('blur', (e) => {
    var inputValue2 = e.target.value
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email.test(inputValue2)) {
        e.target.style.border = '2px solid black'
    } else {
        e.target.style.border = '2px solid red'
    }
  })
  inputEmail.oninput = function(e) {
    e.target.style.border = '2px solid black'
  }

  inputPhone.addEventListener('blur', (e) => {
    var inputValue3 = e.target.value
    if(isNaN(inputValue3.trim())) {
        e.target.style.border = '2px solid red'
    }
  })
  inputPhone.oninput = function(e) {
    e.target.style.border = '2px solid black'
  }
}

Run()

btn.onclick = function() {
   
    var isNameValid = inputName.value.trim() !== '';
    var isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value);
    var isPhoneValid = !isNaN(inputPhone.value.trim());
  
   
    if (isNameValid && isEmailValid && isPhoneValid) {
      alert('Bạn đã gửi thông tin thành công');
    } else {
        inputName.style.border = '2px solid red'
        inputEmail.style.border = '2px solid red'
        inputPhone.style.border = '2px solid red'
    }
  };