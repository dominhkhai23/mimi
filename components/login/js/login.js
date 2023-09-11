function validator(options) {
    var formElement = document.querySelector(options.form);
    if(formElement) {
         formElement.onsubmit = function(e) {
             e.preventDefault();
             var data = {}
             var inputElement; 
             var dataRegister = JSON.parse(localStorage.getItem('informationRegister'));
             options.rules.forEach( rule => {
                 inputElement = document.querySelector(rule.selector)
                 var valueInput = inputElement.value
                 var errorMessage = rule.test(valueInput)
                 var errorElement = inputElement.parentElement.querySelector('.login_body-group-messenger')
                 if(errorMessage) {
                     errorElement.innerText = errorMessage
                } else {
                     errorElement.innerText = ''
                     data[inputElement.id] = valueInput;
                } 
            })

            loginSuccess(data, dataRegister, inputElement)
         }

        function loginSuccess(data, dataRegister, inputElement) {
            if (dataRegister) {
                if (data.email === dataRegister.email && data.password === dataRegister.password) {
                    alert('Bạn Đăng nhập thành công');
                    var dataUsers = {
                        name: dataRegister.name,
                    }
                    window.localStorage.setItem('users', JSON.stringify(dataUsers));
                    inputElement.value = ''
                    window.location.href = '../home/index.html'
                } else {
                    alert('Sai email hoặc mật khẩu');
                }
            } else {
                alert('Vui lòng đăng ký tài khoản');
            }
        }

         options.rules.forEach( rule => {
             var inputElement = document.querySelector(rule.selector)
             if(inputElement) {
                 inputElement.onblur = function() {
                     var valueInput = inputElement.value
                     var errorElement = rule.test(valueInput)
                     var errorMessage = inputElement.parentElement.querySelector('.login_body-group-messenger')
                     if(errorElement) {
                         errorMessage.innerText = errorElement
                     }
                 }
 
                 inputElement.oninput = function() {
                     var errorMessage = inputElement.parentElement.querySelector('.login_body-group-messenger')
                     errorMessage.innerText = ''
                 }
             }
       })
    }
    
   
 }
 
 
 validator.isEmail = function(selector) {
    return {
         selector: selector,
         test(value) {
             var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
             return regex.test(value) ? undefined : 'vui lòng nhập đúng Email'
         }
    }
 }
 
 validator.isPassword = function(selector, min) {
     return {
         selector: selector,
         test(value) {
             return value >= min ? undefined : `vui lòng nhập đủ ${min} ký tự`
         }
     }
 }

