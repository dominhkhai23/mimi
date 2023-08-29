var arrData = [
    {
        img1: 'https://theme.hstatic.net/200000696635/1001034053/14/frame_2.png?v=393',
        img2: 'https://product.hstatic.net/200000696635/product/frame_10_75df804436de44b08eecc555bcfc8f56_medium.png',
        name: 'Áo thun nam - Cream',
        price: 599000 ,
        color: 'cream',
        transport: 'saving'
    },
    {
        img1: 'https://theme.hstatic.net/200000696635/1001034053/14/frame_2.png?v=393',
        img2: 'https://product.hstatic.net/200000696635/product/frame_12_1396f3eceb78463895c5fcb833a9c0fd_medium.png',
        name: 'Áo thun nam - Black',
        price: 599000 ,
        color: 'black',
        transport: 'saving'
    },
    {
        img1: 'https://theme.hstatic.net/200000696635/1001034053/14/frame_2.png?v=393',
        img2: 'https://product.hstatic.net/200000696635/product/frame_13_1ebea68b4c724dcea33c65117c5c9c8d_large.png',
        name: 'Áo thun nam - Brown',
        price: 599000 ,
        color: 'brown',
        transport: 'saving'
    },
    {
        img1: 'https://theme.hstatic.net/200000696635/1001034053/14/frame_2.png?v=393',
        img2: 'https://product.hstatic.net/200000696635/product/frame_14_dcec893cc4484bf3aef617d1387beef7_medium.png',
        name: 'Áo thun nam - Green',
        price: 599000 ,
        color: 'blue',
        transport: 'saving'
    },
    {
        img1: 'https://theme.hstatic.net/200000696635/1001034053/14/frame_2.png?v=393',
        img2: 'https://product.hstatic.net/200000696635/product/frame_1_e87e3a915cf44ec7843f3c34812a1b23_medium.png',
        name: 'Quần ngắn nam - black',
        price: 499000 ,
        color: 'black',
        transport: 'fast'
    },
    {
        img1: 'https://theme.hstatic.net/200000696635/1001034053/14/frame_2.png?v=393',
        img2: 'https://product.hstatic.net/200000696635/product/frame_5_7423829c9cc249e2afafe641e8a78f3c_medium.png',
        name: 'Quần ngắn nam - white',
        price: 499000 ,
        color: 'white',
        transport: 'fast'
    },
    {
        img1: 'https://theme.hstatic.net/200000696635/1001034053/14/frame_2.png?v=393',
        img2: 'https://product.hstatic.net/200000696635/product/frame_72_797887faa24b4fe298400456411a24a7_medium.png',
        name: 'Quần ngắn nam - Cream',
        price: 499000 ,
        color: 'cream',
        transport: 'fast'
    },
    {
        img1: 'https://theme.hstatic.net/200000696635/1001034053/14/frame_2.png?v=393',
        img2: 'https://product.hstatic.net/200000696635/product/frame_2_2cd3c91f91254241bdaa5f2a464c8ffd_medium.png',
        name: 'Quần jean nam',
        price: 799000 ,
        color: 'gray',
        transport: 'free'
    },
    {
        img1: 'https://theme.hstatic.net/200000696635/1001034053/14/frame_2.png?v=393',
        img2: 'https://product.hstatic.net/200000696635/product/frame_63_8bd6284d4be94019b32a991cc12d8554_medium.png',
        name: 'quần thô nam - cream',
        price: 1900000,
        color: 'cream',
        transport: 'free'
    },
    {
        img1: 'https://theme.hstatic.net/200000696635/1001034053/14/frame_2.png?v=393',
        img2: 'https://product.hstatic.net/200000696635/product/frame_16_c0c5f6c399a4455d9dbd75c4adbc44cd_medium.png',
        name: 'quần ngắn nam - orange',
        price: 599000 ,
        color: 'orange',
        transport: 'saving'
    },
    {
        img1: 'https://theme.hstatic.net/200000696635/1001034053/14/frame_2.png?v=393',
        img2: 'https://product.hstatic.net/200000696635/product/frame_44_cccc5af7fb4342d2839f0cd4878e0f03_medium.png',
        name: 'Áo sơ mi HQ - Blue',
        price: 699000 ,
        color: 'blue',
        transport: 'fast'
    },
    {
        img1: 'https://theme.hstatic.net/200000696635/1001034053/14/frame_2.png?v=393',
        img2: 'https://product.hstatic.net/200000696635/product/frame_67_3f11965fcab04888934f522250a7f6a4_medium.png',
        name: 'Áo sơ mi nam - brown',
        price: 699000 ,
        color: 'brown',
        transport: 'fast'
    },
    {
        img1: 'https://theme.hstatic.net/200000696635/1001034053/14/frame_2.png?v=393',
        img2: 'https://product.hstatic.net/200000696635/product/frame_56_5e2199fb082041d3ab669075a49c7665_medium.png',
        name: 'Áo khoác nam - Grey',
        price: 799000 ,
        color: 'gray',
        transport: 'free'
    },
]

var row2 = document.querySelector('.col.l-9 .row') 

function renderData(arr = [], arrPrice = [], arrTransport = []) {
    row2.innerHTML = '';
    const filteredData = arrData.filter((data) => {
        return (arr.length === 0 || arr.includes(data.color)) &&
            (arrPrice.length === 0 ||
            (arrPrice.includes('short') && data.price < 500000) ||
            (arrPrice.includes('medium') && data.price >= 500000 && data.price < 1000000) ||
            (arrPrice.includes('tall') && data.price >= 1000000)) &&
            (arrTransport.length === 0 || arrTransport.includes(data.transport)) 
    })

    if (filteredData.length === 0) {
        const span = document.createElement('span')
        span.classList.add('content_index2-product-not')
        span.innerText = 'Không có sản phẩm nào'
        row2.appendChild(span)
    } else {
        // Render the filtered products
        filteredData.forEach((data, index) => {
            const price = (data.price).toLocaleString("vi-VN") + 'đ'
            const col = document.createElement('div')
            col.classList.add('col')
            col.classList.add('l-3')
            col.classList.add('m-4')
            col.classList.add('c-12')
            col.classList.add('content_index2-active')
            col.innerHTML = `
                <div class="content_index2-product">
                    <div class="content_index2-product-imgs">
                        <img src="${data.img1}" alt="" class="content_index2-product-img1">
                        <img src="${data.img2}" alt="" class="content_index2-product-img2">
                        <a href="" class="content_index2-product-eye-link">
                            <span class="content_index2-product-eye">
                                <i class="fa-solid fa-eye"></i>
                            </span>
                        </a>  
                       
                    </div>
                    <div class="content_index2-product-information">
                        <span class="content_index2-product-other">
                            khác
                        </span>
                        <span class="content_index2-product-heart">
                            <i class="fa-solid fa-heart"></i>
                        </span>
                        <h3 class="content_index2-product-name">
                            ${data.name}
                        </h3>
                        <p class="content_index2-product-price">
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

     // lọc theo giá trên phần header
    var select = document.querySelector('.content_index2-header-select') 
    select.onchange = function(e) {
         arrPrice.slice(0, arrPrice.length)
         arrPrice.push(e.target.value)
         renderData(arr, arrPrice, arrTransport)
    }



    // lọc theo transport
    const arrTransport = []
    const input3 = document.querySelectorAll('.transport')   
    input3.forEach((check3) => {
        check3.addEventListener('change', (e) => {
            if(e.target.checked) {
                arrTransport.push(e.target.value)
            }else {
                const index = arrTransport.indexOf(e.target.value)
                if (index > -1) {
                    arrTransport.splice(index, 1)
                }
            }  
            
             renderData(arr, arrPrice, arrTransport)
        })
    })

   
}

chooseProduct()
