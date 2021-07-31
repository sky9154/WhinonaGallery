//draw
function draw(){
    const Kasiboan = [
        {
            title:"Kasiboan - 友善旅人",
            image:"./images/LanyuKasiboan/Kasiboan-友善旅人, 2021.webp"
        },
        {
            title:"Kasiboan - 多背一公斤垃圾",
            image:"./images/LanyuKasiboan/Kasiboan-多背一公斤垃圾, 2021.webp"
        },
        {
            title:"Kasiboan - 堆垃圾的地方",
            image:"./images/LanyuKasiboan/Kasiboan-堆垃圾的地方, 2021.webp"
        },
        {
            title:"Kasiboan - 蘭嶼是世界的縮影",
            image:"./images/LanyuKasiboan/Kasiboan-蘭嶼是世界的縮影, 2021.webp"
        }
    ];
    const Mountain = [
        {
            title:"Mountain Climbing",
            image:"./images/MountainClimbing/MountainClimbing, 2016.webp",
            content:"Acrylic on canvas.",
            time:"2016"
        },
        {
            title:"雪山",
            image:"./images/MountainClimbing/雪山, 2019.webp",
            content:"美麗的天氣，你收到山神的禮物了嗎?",
            time:"2019"
        },
        {
            title:"Little steps , many days",
            image:"./images/MountainClimbing/Little steps, many days, 2017.webp",
            content:"Acrylic on canvas.<br>希望下次可以畫更多人進去<br>這次想感謝的人很多，都放心裡。<br><br><i class='blue-text'># 奇萊山</i>",
            time:"2017/11/16"
        }
    ];
    const lanyu = document.getElementById('lanyu');
    Kasiboan.forEach((post) => {
        lanyu.innerHTML += `
    <div class="col s12 m6">
        <div class="card animate__animated animate__zoomIn animate__fast">
            <div class="card-image">
                <img src="${post.image}" class="materialboxed" data-caption="${post.title}">
                <span  class="card-title"><h6><b class="cyan-text text-accent-1">&ensp;${post.title}&ensp;</b></h6></span>
            </div>
        </div>
    </div>
    `;
    });
    const mountain = document.getElementById('mountain');
    Mountain.forEach((post) => {
        mountain.innerHTML += `
        <div class="col s12 m6 l4">
            <div class="card animate__animated animate__zoomIn animate__fast">
                <div class="card-image">
                    <img src="${post.image}" class="materialboxed" data-caption="${post.title}">
                    <span  class="card-title"><h6><b class="cyan-text text-accent-1">&ensp;${post.title}&ensp;</b></h6></span>
                </div>
                <div class="card-content">
                    <p class="left-align">${post.content}</p>
                    <p class="right"><i>-&nbsp;${post.time}</i></p>
                </div>
            </div>
        </div>
    `;
    });
};