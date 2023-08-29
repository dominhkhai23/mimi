var arrData = JSON.parse(localStorage.getItem('productType'))
var dataMain;
var dataItem;
arrData.forEach(dataProduct2 => {
  dataMain = dataProduct2.clothes
  dataItem = dataProduct2.item
})
    


var Item = document.querySelector('.content_index3-indexing-name-color')
var row2 = document.querySelector('.col.l-9 .row') 

function renderData(arr = [], arrPrice = [], arrTransport = []) {
    row2.innerHTML = '';
    const filteredData = dataMain.filter((data) => {
        return (arr.length === 0 || arr.includes(data.color)) &&
            (arrPrice.length === 0 ||
            (arrPrice.includes('short') && data.price < 500000) ||
            (arrPrice.includes('medium') && data.price >= 500000 && data.price < 1000000) ||
            (arrPrice.includes('tall') && data.price >= 1000000)) &&
            (arrTransport.length === 0 || arrTransport.includes(data.transport)) 
    })

    if (filteredData.length === 0) {
        const span = document.createElement('span')
        span.classList.add('content_index3-product-not')
        span.innerText = 'Không có sản phẩm nào'
        row2.appendChild(span)
    } else {
        // Render the filtered products
        filteredData.forEach((data, index) => {
            const price = (data.price).toLocaleString("vi-VN") + 'đ'
            Item.innerText = dataItem
            const col = document.createElement('div')
            col.classList.add('col')
            col.classList.add('l-3')
            col.classList.add('m-4')
            col.classList.add('c-12')
            col.classList.add('content_index3-active')
            col.innerHTML = `
                <div class="content_index3-product">
                    <div class="content_index3-product-imgs">
                        <img src="${data.img1}" alt="" class="content_index3-product-img1">
                        <img src="${data.img2}" alt="" class="content_index3-product-img2">
                        <a href="" class="content_index3-product-eye-link" data-index="${index}">
                            <span class="content_index3-product-eye">
                                <i class="fa-solid fa-eye"></i>
                            </span>
                        </a>  
                       
                    </div>
                    <div class="content_index3-product-information">
                        <span class="content_index3-product-other">
                            khác
                        </span>
                        <span class="content_index3-product-heart">
                            <i class="fa-solid fa-heart"></i>
                        </span>
                        <h3 class="content_index3-product-name">
                            ${data.name}
                        </h3>
                        <p class="content_index3-product-price">
                            ${price}
                        </p>
                    </div>
                </div>
            `
            row2.appendChild(col)
        })
    }
    
}
       
renderData()

function chooseProduct() {
    // lọc theo màu   
    const arr = []
    const input1 = document.querySelectorAll('.color')
    input1.forEach((check) => {
        check.addEventListener('change', (e) => {
            if (e.target.checked) {
                arr.push(e.target.value)
            } else {
                const index = arr.indexOf(e.target.value)
                if (index > -1) {
                    arr.splice(index, 1)
                }
            }
            renderData(arr)
        })
    })
    
    
    // lọc theo giá
    const arrPrice = []
    const input2 = document.querySelectorAll('.price')
    input2.forEach((check2) => {
        check2.addEventListener('change', (e) => {
            if(e.target.checked) {
                arrPrice.push(e.target.value)
            }else {
                const index = arrPrice.indexOf(e.target.value)
                if (index > -1) {
                    arrPrice.splice(index, 1)
                }
            }  
            
             renderData(arr, arrPrice)
    
        })
    })

    // lọc theo transport
    const arrTransport = []
    const input3 = document.querySelectorAll('.transport')   
    input3.forEach((check3) => {
        check3.addEventListener('change', (e) => {
            if(e.target.checked) {
                arrTransport.push(e.target.value)
            } else {
                const index = arrTransport.indexOf(e.target.value)
                if (index > -1) {
                    arrTransport.splice(index, 1)
                }
            }  
            
             renderData(arr, arrPrice, arrTransport)
        })
    })

    // lọc theo giá trên phần header
    var select = document.querySelector('.content_index3-header-select') 
    select.onchange = function(e) {
        arrPrice.push(e.target.value)
        renderData(arr, arrPrice, arrTransport)
    }
}

chooseProduct()
