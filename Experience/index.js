//draw
function draw(){
    const Kasiboan = [
        {
            title:"Kasiboan - 友善旅人",
            image:"./images/LanyuKasiboan/Kasiboan-友善旅人, 2021.jpg"
        },
        {
            title:"Kasiboan - 多背一公斤垃圾",
            image:"./images/LanyuKasiboan/Kasiboan-多背一公斤垃圾, 2021.jpg"
        },
        {
            title:"Kasiboan - 堆垃圾的地方",
            image:"./images/LanyuKasiboan/Kasiboan-堆垃圾的地方, 2021.jpg"
        },
        {
            title:"Kasiboan - 蘭嶼是世界的縮影",
            image:"./images/LanyuKasiboan/Kasiboan-蘭嶼是世界的縮影, 2021.jpg"
        }
    ];
    const i =0;
    const lanyu = document.getElementById('lanyu');
    Kasiboan.forEach((post) => {
        lanyu.innerHTML += `
    <div class="col s12 m6">
        <div class="card animate__animated animate__zoomIn animate__fast">
            <div class="card-image">
                <img src="${post.image}" class="materialboxed" data-caption="${post.title}">
                <span  class="card-title"><h6><b class="cyan-text text-accent-1">&nbsp;${post.title}&nbsp;</b></h6></span>
            </div>
        </div>
    </div>
    `;
    });
};