const data = JSON.parse(localStorage.getItem('sanpham'))
var sliderImg1 = document.querySelector('.content_index6-main-photo-img2')
const sliderPhoto = document.querySelector('.content_index6-img')
const sliderSub = document.querySelector('.content_index6-sub-photo')
const nameProduct = document.querySelector('.content_index6-heading')
const priceProduct = document.querySelector('.content_index6-price')
const colorList = document.querySelector('.content_index6-color-list')
const nextLeft = document.querySelector('.content_index6-main-icon-left')
const nextRight = document.querySelector('.content_index6-main-icon-right')
var color;
var index = 0; 
var imgs;
var dataImg;
data.map((detail) => {
  dataImg = detail.img
  sliderImg1.src = detail.img1
  sliderSub.innerHTML = ''
  nameProduct.innerText = detail.name
  priceProduct.innerText = 'Giá:' + (detail.price).toLocaleString("vi-VN") + 'đ'

  for(let i = 0; i < detail.img.length; i++) {
    const imgElement = document.createElement("img");
    imgElement.classList.add('content_index6-img')
    if(i === 0) {
      imgElement.classList.add('active_index6')
    }
    imgElement.src = detail.img[i];
    sliderSub.appendChild(imgElement);
  }
  imgs = document.querySelectorAll('.content_index6-img')
  imgs.forEach((img, currentIndex) => {
    img.onclick = function() {
       slider(currentIndex)
    }
  }) 

   colorList.innerHTML = ''
   for(let i = 0; i < detail.color.length; i++) {
     const colorChoose = document.createElement('p')
     colorChoose.classList.add('content_index6-color-choose')
     colorChoose.setAttribute('data-color', detail.color[i])
     colorChoose.innerText = detail.color[i]
     colorList.appendChild(colorChoose)
   }
   color = document.querySelectorAll('.content_index6-color-choose')
   color.forEach((colorBtn, index2) => {
    colorBtn.onclick = function(e) {
      color2(index2, colorBtn)
      var typeColor = e.target.dataset.color
      window.localStorage.setItem('color', JSON.stringify(typeColor))
    }
   })
})



var isBlack = false;
function color2(index2, colorBtn) {
  index = index2
  sliderImg1.style.animation = ''
  sliderImg1.src = dataImg[index]
  setTimeout(function() {
    sliderImg1.style.animation = 'RunLine2 1s ease-in-out'
  }, 100)

  if(!isBlack) {
    isBlack = true
    colorBtn.style.backgroundColor = 'black'
    colorBtn.style.color = 'white'
  } else {
    isBlack = false
    colorBtn.style.backgroundColor = 'white'
    colorBtn.style.color = 'black'
  }
}

function slider(currentIndex) {
  Array.from(imgs).map((img) => {
      img.classList.remove('active_index6')
  }) 
  index = currentIndex
  sliderImg1.style.animation = ''
  sliderImg1.src = dataImg[index]
  setTimeout(function() {
    sliderImg1.style.animation = 'RunLine2 1s ease-in-out'
  }, 100)
  imgs[index].classList.add('active_index6')
}


nextLeft.onclick = function() {
   imgs.forEach(img => {
    img.classList.remove('active_index6')
   })
    index--
    if(index < 0) {
        index = dataImg.length - 1
    }
   sliderImg1.style.animation = ''
   sliderImg1.src = dataImg[index]
   setTimeout(function() {
   sliderImg1.style.animation = 'RunLine2 1s linear'
   }, 100)
   imgs[index].classList.add('active_index6')
   
}

nextRight.onclick = function() {
  imgs.forEach(img => {
    img.classList.remove('active_index6')
   })
   index++
   if(index >= dataImg.length) {
     index = 0
   }
   sliderImg1.style.animation = ''
   sliderImg1.src = dataImg[index]
   setTimeout(function() {
   sliderImg1.style.animation = 'RunLine2 1s ease-in-out'
   }, 100)
   imgs[index].classList.add('active_index6')
   
}

window.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    history.back();
  }
});