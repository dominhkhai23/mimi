var dataEvaluate = [
    {
        id: 1,
        img: 'https://static.antoree.com/avatar.png',
        name: 'minhV123',
        content:'chất liệu tốt, sẽ ủng hộ shop nhiều hơn'
    },
    {
        id: 2,
        img: 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-9-481x600.jpg',
        name: 'quynh23',
        content:'chất liệu tốt, sẽ ủng hộ shop nhiều hơn',
        class: 'star--active'
    },
    {
        id: 2,
        img: 'https://hinhnen4k.com/wp-content/uploads/2023/02/anh-gai-xinh-2k4-1.png',
        name: 'thúy567',
        content:'chất liệu tốt, sẽ ủng hộ shop nhiều hơn',
        class: 'star--active'
    },
    {
        id: 2,
        img: 'https://www.ldg.com.vn/media/uploads/uploads/22013642-hinh-anh-gai-xinh-9.jpg',
        name: 'trâmvvv',
        content:'chất liệu tốt, sẽ ủng hộ shop nhiều hơn',
        class: 'star--active'
    },
    {
        id: 1,
        img: 'https://haycafe.vn/wp-content/uploads/2022/03/Anh-gai-xinh-de-thuong-cute.jpg',
        name: 'thăm333',
        content:'chất liệu tốt, sẽ ủng hộ shop nhiều hơn'
    },
    {
        id: 4,
        img: 'https://i.pinimg.com/736x/ac/61/6e/ac616eac8a162481a2bcf42b78c198ac.jpg',
        name: 'thăm333',
        content:'chất lượng hơi tệ',
        class: [
            'star--active',
            'star--active',
            'star--active',
        ]
    },
    {
        id: 5,
        img: 'https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg',
        name: 'xinhxinh1',
        content:'giao hàng quá chậm',
        class: [
            'star--active',
            'star--active',
            'star--active',
            'star--active',
        ]
    },
]

const user = document.querySelector('.content_index6-user')
const evaluate = document.querySelectorAll('.content_index6-Evaluate-item')
const btnAll = document.querySelector('.btn-all-comment')


var list;
evaluate.forEach((star, index) => {
   star.onclick = function () {
        for(var value of evaluate) {
           value.classList.remove('active-border')
        }
        if(index === 0) {
           list = dataEvaluate
        } else {
            list = dataEvaluate.filter(data => {
                return data.id === index;
            });
        }
        evaluate[index].classList.add('active-border')
        render(list);

    }
})

btnAll.onclick = function() {
    list = dataEvaluate
    render(list);
}

function render(list, data) {
    user.innerHTML = '';
    if(list.length === 0) {
        var span = document.createElement('span');
        span.classList.add('content_index6-user-not')
        span.innerText = `Không có bình luận nào`
        user.appendChild(span);
    } else { 
            const html = list.map(data2 => {
                return `
                <div class="content_index6-user-cover">
                    <div class="content_index6-user-header">
                        <div class="content_index6-user-header-imgs">
                        <img src="${data2.img}" alt="" class="content_index6-user-img">
                        </div>
                        <div class="content_index6-user-information">
                        <h3 class="content_index6-user-name">
                            ${data2.name}
                        </h3>
                        <span class="content_index6-user-icon">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </span>
            
                        <p class="content_index6-user-description">
                            <span class="content_index6-user-kind"> phân loại: áo thun đen |</span>
                            <span class="content_index6-user-day">23/7/2023</span>
                            <span class="content_index6-user-time">9:30</span>
                        </p>
                        </div>
                    </div>
                    <div class="content_index6-user-comment">
                        <p class="content_index6-user-comment-quality">
                        chất lượng sản phẩm: Đúng
                        </p>
                        <p class="content_index6-user-comment-text">
                        ${data2.content}
                        </p>
                    </div>
                </div>`
            }).join('');
            user.innerHTML = html;
    }
}
