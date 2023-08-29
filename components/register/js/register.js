function validator(options) {
    var formElement = document.querySelector(options.form);
    if(formElement) {
         formElement.onsubmit = function(e) {
             e.preventDefault(); 
             var dataRegister = {}
             options.rules.forEach( rule => {
                 var inputElement = document.querySelector(rule.selector)
                 var valueInput = inputElement.value
                 var errorMessage = rule.test(valueInput)
                 var errorElement = inputElement.parentElement.querySelector('.register_body-group-messenger')
                 if(errorMessage) {
                     errorElement.innerText = errorMessage
                } else {
                     errorElement.innerText = ''
                     dataRegister[inputElement.id] = valueInput;
                } 

                
               window.localStorage.setItem('informationRegister', JSON.stringify(dataRegister))

             })
         }
         options.rules.forEach( rule => {
             var inputElement = document.querySelector(rule.selector)
             if(inputElement) {
                 inputElement.onblur = function() {
                     var valueInput = inputElement.value
                     var errorElement = rule.test(valueInput)
                     var errorMessage = inputElement.parentElement.querySelector('.register_body-group-messenger')
                     if(errorElement) {
                         errorMessage.innerText = errorElement
                     }
                 }
 
                 inputElement.oninput = function() {
                     var errorMessage = inputElement.parentElement.querySelector('.register_body-group-messenger')
                     errorMessage.innerText = ''
                 }
             }
       })
    }
}
 

validator.isName = function(selector) {
    return {
        selector: selector,
        test(value) {
          return value.trim() ? undefined : 'vui lòng nhập họ và tên';
        }
    }
}
 
validator.isEmail = function(selector) {
    return {
         selector: selector,
         test(value) {
             var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
             return regex.test(value) ? undefined : 'vui lòng nhập đúng Email';
         }
    }
}

validator.isPassword = function(selector, min) {
     return {
         selector: selector,
         test(value) {
             return value >= min ? undefined : `vui lòng nhập đủ ${min} ký tự`;
         }
     }
}
 
validator.isEnterPassword = function(selector, compare) {
    return {
        selector: selector,
        test(value) {
            return value === compare() ? undefined : `vui lòng nhập đúng mật khẩu`;
        }
    }
}