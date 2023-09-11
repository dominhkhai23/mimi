var nameUsers = JSON.parse(localStorage.getItem('users'));
var nameHtml = document.querySelector('.header_users-name')
var parentUsers;
var userAgo;
var exitUser = document.querySelector('.header_users-exit')
var userIcon = document.querySelector('.modal3_menu-user')
var cover = document.querySelector('.modal3_menu-cover')
var loginSuccess = document.querySelector('.modal3_menu-user-success')
var Name = document.querySelector('.modal3_menu-user-name')
var modalUsersIcon = document.querySelector('.modal_search-icon.modal_search-hover')
var modalUsers = document.querySelector('.modal_users')
var modalName = document.querySelector('.modal_users-name')
var modalExit = document.querySelector('.modal_users-item.modal_users-exit')


function displayUserData() {
   if (Object.keys(nameUsers).length > 0) {
      userAgo = document.querySelector('.header_index6-navbar-user');
      userAgo.style.display = 'none';
      parentUsers = document.querySelector('.header_users');
      parentUsers.style.display = 'block';
      nameHtml.innerText = nameUsers.name; 
      // modal
      modalUsersIcon.style.display = 'none';
      modalName.innerText = nameUsers.name
      modalUsers.style.display = 'block';
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

modalExit.addEventListener('click', (e) => {
   var modalList = e.target.parentElement 
   var modalInformation = modalList.parentElement
   var users = modalInformation.parentElement
   users.remove()
   modalUsersIcon.style.display = 'block'
   userAgo.style.display = 'block';
   userIcon.style.display = 'block';
   cover.style.display = 'block'
   window.localStorage.removeItem('users')
   displayUserData();
})