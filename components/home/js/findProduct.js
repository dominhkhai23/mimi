const inputSearch = document.querySelector('.modal_search-input')
var dataProductSearch = [
    {  
        name: 'áo sơ mi kẻ',
        fashion: [
            {
                img: [
                    'https://product.hstatic.net/200000696635/product/frame_75_65cc214b036b42d986a20715473471a5.png',
                    'https://product.hstatic.net/200000696635/product/frame_72_51c15fca00b9410080f16ac6c7ad7028.png'
                ],
                img1: 'https://product.hstatic.net/200000696635/product/frame_74_e16dcdce7c2a41d286587294ba0d123c.png',
                name: 'Áo sơ mi - navy',
                price: 499000,
                color:[
                    'nâu',
                    'trắng',
                    'xanh',
                    'đen',
                ]
            },

            { 
                img: [
                     'https://product.hstatic.net/200000696635/product/frame_64_2e43ad9070f041aa8d80f8b47ed34876.png',
                     'https://product.hstatic.net/200000696635/product/frame_65_628ab6e8f0f443268a626890a8af9a30.png',
                     'https://product.hstatic.net/200000696635/product/frame_66_d1372db2da6745bb9263cc35586b4fda.png'
                 ],
                 img1: 'https://product.hstatic.net/200000696635/product/frame_64_2e43ad9070f041aa8d80f8b47ed34876.png',
                 name: 'Áo sơ mi kẻ sọc-white',
                 price: 499000,
                 color:[
                    'trắng',
                    'hồng'
                ]
            },
            { 
                img: [
                    'https://product.hstatic.net/200000696635/product/frame_66_d1372db2da6745bb9263cc35586b4fda.png',
                    'https://product.hstatic.net/200000696635/product/frame_64_ceca40e3206f4576aa86227d236640a2.png',
                    
                 ],
                 img1: 'https://product.hstatic.net/200000696635/product/frame_66_d1372db2da6745bb9263cc35586b4fda.png',
                 name: 'Áo sơ mi kẻ sọc-Pink',
                 price: 499000,
                 color:[
                    'hồng',
                    'trắng',
                 ]
            }, 
        ]

    },
    {
        name: 'áo khoác nam',
        fashion: [
            { 
                img: [
                     'https://product.hstatic.net/200000696635/product/frame_56_5e2199fb082041d3ab669075a49c7665.png',
                     'https://product.hstatic.net/200000696635/product/frame_53_c101d70b853743fb966a00b57f7d5c0e.png',
                     'https://product.hstatic.net/200000696635/product/frame_54_36e18c298835420cb6c833112451e3f1.png',
                     'https://product.hstatic.net/200000696635/product/frame_57_ff01cfd9807d47b19ec00aa65b2ce4fb.png',
                 ],
                 img1: 'https://product.hstatic.net/200000696635/product/frame_56_5e2199fb082041d3ab669075a49c7665.png',
                 name: 'Áo khoác nam - key',
                 price: 799000,
                 color:[
                    'xám',
                    'nâu'
                  ]
            },
        ]
    },
    {
        name: 'áo thun nam',
        fashion: [
            {
                img: [
                    'https://product.hstatic.net/200000696635/product/frame_1_e87e3a915cf44ec7843f3c34812a1b23.png',
                    'https://product.hstatic.net/200000696635/product/frame_18_c549708e696a4b82883e127de94360c4_medium.png',
                    'https://product.hstatic.net/200000696635/product/frame_14_bd13319353114a2c82ce159bb352c6a5_medium.png',
                    'https://product.hstatic.net/200000696635/product/frame_12_1396f3eceb78463895c5fcb833a9c0fd_medium.png',
                ],
                img1: 'https://product.hstatic.net/200000696635/product/frame_1_e87e3a915cf44ec7843f3c34812a1b23.png',
                name: 'Áo thun nam - brown',
                price: 599000,
                color:[
                    'nâu',
                    'trắng',
                    'xanh',
                    'đen',
                ]
            },

            { 
                img: [
                     'https://product.hstatic.net/200000696635/product/frame_16_c0c5f6c399a4455d9dbd75c4adbc44cd.png',
                     'https://product.hstatic.net/200000696635/product/frame_18_c549708e696a4b82883e127de94360c4_medium.png',
                     'https://product.hstatic.net/200000696635/product/frame_13_ce068aebcd7b486b849d5a8cd6b11fa3_medium.png',
                     'https://product.hstatic.net/200000696635/product/frame_12_1396f3eceb78463895c5fcb833a9c0fd_medium.png',
                 ],
                 img1: 'https://product.hstatic.net/200000696635/product/frame_16_c0c5f6c399a4455d9dbd75c4adbc44cd.png',
                 name: 'Áo thun nam - green',
                 price: 599000,
                 color:[
                    'xanh',
                    'trắng',
                    'nâu',
                    'đen',
                 ] 
            },
            { 
                img: [
                    'https://product.hstatic.net/200000696635/product/frame_2_2cd3c91f91254241bdaa5f2a464c8ffd.png',
                    'https://product.hstatic.net/200000696635/product/frame_18_c549708e696a4b82883e127de94360c4_medium.png',
                    'https://product.hstatic.net/200000696635/product/frame_14_bd13319353114a2c82ce159bb352c6a5_medium.png',
                    'https://product.hstatic.net/200000696635/product/frame_13_ce068aebcd7b486b849d5a8cd6b11fa3_medium.png',
                ],
                img1: 'https://product.hstatic.net/200000696635/product/frame_2_2cd3c91f91254241bdaa5f2a464c8ffd.png',
                name:'Áo thun nam - black',
                price:599000,
                color:[
                    'Đen',
                    'trắng',
                    'xanh',
                    'nâu',
                ]
            },
            
        ]

    },
    {
        name: 'quần dài nam',
        fashion: [
            { 
                img: [
                     'https://product.hstatic.net/200000696635/product/frame_36_3b2dde9b18f541539c6b3ebea8d108c0.png',
                     'https://product.hstatic.net/200000696635/product/frame_38_62a8cf53e9414848b21671523611042e.png',
                 ],
                 img1: 'https://product.hstatic.net/200000696635/product/frame_36_3b2dde9b18f541539c6b3ebea8d108c0.png',
                 name: 'Quần dài nam - brown',
                 price: 799000,
                 color:[
                    'nâu',
                     'đen'
                  ]
            },
            { 
                img: [
                    'https://product.hstatic.net/200000696635/product/frame_38_62a8cf53e9414848b21671523611042e.png',
                    'https://product.hstatic.net/200000696635/product/frame_36_3b2dde9b18f541539c6b3ebea8d108c0.png',
                 ],
                 img1: 'https://product.hstatic.net/200000696635/product/frame_38_62a8cf53e9414848b21671523611042e.png',
                 name: 'Quần dài nam - grey',
                 price: 799000,
                 color:[
                    'nâu',
                     'đen'
                  ]
            },
        ]
    },
    {
        name: 'quần ngắn nam',
        fashion: [
            {
                img: [
                    'https://product.hstatic.net/200000696635/product/frame_68_35dff0952596435684ac4071d8253239.png',
                    'https://product.hstatic.net/200000696635/product/frame_70_b1a5291d78ba477285de93f81a51272e.png',
                    'https://product.hstatic.net/200000696635/product/frame_71_f8a102a0e93b4018aa415b55f1ebfbde.png',
                 ],
                 img1: 'https://product.hstatic.net/200000696635/product/frame_71_f8a102a0e93b4018aa415b55f1ebfbde.png',
                 name: 'quần ngắn nam - brown',
                 price: 599000,
                 color:[
                    'nâu',
                    'kem',
                    'đen'
                  ]
            },
            { 
                img: [
                    'https://product.hstatic.net/200000696635/product/frame_5_7423829c9cc249e2afafe641e8a78f3c.png',
                    'https://product.hstatic.net/200000696635/product/frame_69_d078e74c2a014159a6011bd26858fc7c.png',
                    'https://product.hstatic.net/200000696635/product/frame_71_f8a102a0e93b4018aa415b55f1ebfbde.png'
                 ],
                 img1: 'https://product.hstatic.net/200000696635/product/frame_5_7423829c9cc249e2afafe641e8a78f3c.png',
                 name: 'Quần ngắn nam - white',
                 price: 499000,
                 color:[
                    'trắng đen',
                    'trắng',
                     'nâu'
                ]
            },
        ]
    },
    {   
        name: 'quần jeans',
        fashion: [
            { 
                img: [
                     'https://product.hstatic.net/200000696635/product/frame_77_7461202014e846a9bb4bc6f5aef02d10.png',
                     'https://product.hstatic.net/200000696635/product/frame_78_00d27137498143cd928183fe52f0beaf.png',
                 ],
                 img1: 'https://product.hstatic.net/200000696635/product/frame_2_2cd3c91f91254241bdaa5f2a464c8ffd.png',
                 name: 'Quần jeans nam',
                 price: 799000,
                 color:[
                    'xanh',
                     'đen'
                  ]
            },
        ]

    },

]

const eyeElements = document.querySelectorAll('.content2_product-eye-link')
const productElements = document.querySelectorAll('.col.l-2-4.m-4.c-12.content2_active')
const BtnSearch = document.querySelector('.modal_search-btn')

inputSearch.addEventListener('keyup', (e) => {
    switch(e.keyCode) {
        case 13: 
        var value = e.target.value.toLowerCase().trim();
        handle(value);
    }
})

BtnSearch.onclick = function() {
    var value = inputSearch.value.toLowerCase().trim();
    handle(value);
}

function handle(value) {
    var dataFilter = dataProductSearch.filter(function(product) {
        var productType = product.name.toLowerCase().trim();
        var filteredFashion = [];
        product.fashion.forEach(function(fashion) {
            var fashionName = fashion.name.toLowerCase().trim();
            if (fashionName === value) {
               filteredFashion.push(fashion);
            }
        });
        if(filteredFashion.length > 0) {
            Filter(filteredFashion)
        }

        if (productType.includes(value)) {
            return true;
        }

           return false; 
        
    });
    const visibleEyeElements = Array.from(eyeElements).filter(element => {
        return element.offsetParent !== null;
    });
    visibleEyeElements.forEach((element, index) => {
        element.onclick = function(e) {
            var data;
            if (dataFilter.length >= 2) {
              var mergedObject = dataFilter.reduce((acc, information) => {
                return acc.concat(information.fashion);
              }, []);
              
              data = mergedObject.filter((data, indexData) => {
                return indexData === index;
              });
            } else {
                const fashionArray = dataFilter.map((item) => {
                    return item.fashion 
                })
                
                var valueItem;
                for(let value of fashionArray) {
                   valueItem = value
                }
                var newArray = []
                for(let i = 0; i < valueItem.length; i++) {
                    if(i == index) {
                        newArray.push(valueItem[i])
                        data = newArray
                        break;
                    }
                }
               
            }
            pushLocalStorage(element, data)
            
        }
                
    })
}


function Filter(filteredFashion) {
    const visibleEyeElements = Array.from(eyeElements).filter(element => {
        return element.offsetParent !== null;
    });
    visibleEyeElements.forEach((element, index) => {
        element.addEventListener('click', () => {
            var data =  filteredFashion.filter((dataSingle, index2) => {
                return index === index2
            });
            pushLocalStorage(element, data)
        })
    })
}

    inputSearch.addEventListener('input', () => {
        setTimeout(() => {
            const suggestSearch = document.querySelectorAll('.modal_search-suggest-item')
            for(let item of suggestSearch) {
                item.addEventListener('click', () => {
                    const visibleProducts = Array.from(productElements).filter(element => {
                        const computedStyle = getComputedStyle(element);
                        return computedStyle.display !== 'none';
                    });
                     
                    visibleProducts.forEach(productScreen => {
                       var dataType = productScreen.getAttribute('type').toLowerCase().trim();
                       var dataSuggest = dataProductSearch.filter(product => {
                           var productName = product.name.toLowerCase().trim();
                           return productName === dataType
                       })
                       var dataFashion;
                       dataSuggest.forEach(productFilter => {
                            dataFashion = productFilter.fashion
                       })
                       const visibleEyeElements = Array.from(eyeElements).filter(element => {
                          return element.offsetParent !== null;
                       });

                       visibleEyeElements.forEach((eyeElement, index) => {
                          eyeElement.onclick = function () {
                            var data = dataFashion.filter((data, index2) => {
                                return index2 === index;
                            })
                            console.log(data);
                            pushLocalStorage(eyeElement, data)
                            inputSearch.value = ''
                          }
                       })
                    
                   })

                })
            }
        }, 1000)
    
    })


function pushLocalStorage(element, data) {
    window.localStorage.removeItem('sanpham');
    window.localStorage.setItem('sanpham', JSON.stringify(data)); 
    element.href = '../productDetail/productDetail.html';
}
