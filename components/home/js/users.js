var nameUsers = JSON.parse(localStorage.getItem('users'));
var nameHtml = document.querySelector('.header_users-name')
var parentUsers;
var userAgo;
var exitUser = document.querySelector('.header_users-exit')
var userIcon = document.querySelector('.modal3_menu-user')
var cover = document.querySelector('.modal3_menu-cover')
var loginSuccess = document.querySelector('.modal3_menu-user-success')
var Name = document.querySelector('.modal3_menu-user-name')

function displayUserData() {
   if (Object.keys(nameUsers).length > 0) {
      userAgo = document.querySelector('.header_navbar-user');
      userAgo.style.display = 'none';
      parentUsers = document.querySelector('.header_users');
      parentUsers.style.display = 'block';
      nameHtml.innerText = nameUsers.name; 
      // mobile and tablet
      userIcon.style.display = 'none';
      cover.style.display = 'none'
      loginSuccess.style.display = 'flex'
      Name.innerText = nameUsers.name
   }
}

displayUserData();

exitUser.addEventListener('click', (e) => {
   var userList = e.target.parentElement 
   var userInformation = userList.parentElement
   var user = userInformation.parentElement
   user.remove()
   userAgo.style.display = 'block';
   userIcon.style.display = 'block';
   cover.style.display = 'block'
   window.localStorage.removeItem('users')
   displayUserData();
})