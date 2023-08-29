const messageBtn = document.querySelector('.content_message-cover')
const contentChat = document.querySelector('.content_message-chat')
const messageInput = document.querySelector('.content_message-footer-input');
const messageContainer  = document.querySelector('.content_message-text-person');
const sendIcon = document.querySelector('.content_message-footer-icon')
const userName =  JSON.parse(localStorage.getItem('users'))
const Exit = document.querySelector('.content_message-chat-icon')
console.log(Exit)


var isNone = false
messageBtn.addEventListener('click', () => {
  if(!isNone) {
    contentChat.style.display = 'block'
    isNone = true
  } else {
    contentChat.style.display = 'none'
    isNone = false
  }
})

sendIcon.onclick = function () {
   var Name = userName.name
   var message = messageInput.value
   if(!messageInput.value) {
     return;
   }
   messageInput.value = ''
   messageRender(message, Name)
 
}

messageInput.onkeyup = function(e) {
    switch (e.keyCode) {
        case 13:
            var Name = userName.name
            var message = messageInput.value  
            if(!messageInput.value) {
                return;
            }
            messageInput.value = ''
            messageRender(message, Name)
            break;
    }
}

function messageRender(message, Name) {
    const personSend = document.createElement('div')
    personSend.classList.add('content_message-text-customer')
    personSend.innerHTML = `
            <p class="content_message-customer-name">
                    ${Name}
            </p>
            <div class="content_message-customer-cluster">
                <p class="content_message-customer-content">
                        ${message}
                </p>
                <span class="content_message-dots">
                    ...
                    <ul class="content_message-dots-list">
                        <li class="content_message-dots-item">xóa, gỡ</li>
                    </ul>
                </span>
            </div>
    `
    const ownerPerson = document.createElement('div')
    ownerPerson.classList.add('.content_message-text-owner')
    ownerPerson.innerHTML = `
        <p class="content_message-owner-name">
            Ngáo store
        </p>
        
        <p class="content_message-owner-content">
            Shop sẽ phản hồi 5 lại phút sau
        </p>
        
    `
    messageContainer.appendChild(personSend)
    setTimeout(() => {
        messageContainer.appendChild(ownerPerson)
    }, 1000)

    const deleteMessage = document.querySelectorAll('.content_message-dots-item')
    deleteMessage.forEach((message) => {
     message.addEventListener('click', () => {
         const Delete = message.parentElement
         const dost = Delete.parentElement
         const parent = dost.parentElement
         const contentMessage = parent.querySelector('.content_message-customer-content')
         if(contentMessage) {
             contentMessage.innerText = ''
             setTimeout(() => {
                contentMessage.innerText = 'Bạn đã thu hồi tin nhắn'
             }, 1500)
         }

     })
    })
}

Exit.addEventListener('click', () => {
    contentChat.style.display = 'none'
})

