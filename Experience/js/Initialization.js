$(document).ready(function () {
    // Init Sidenav
    $('.sidenav').sidenav({
        edge: 'right',
        draggable: true,
        preventScrolling: false
    });
    draw();
    // Init Materialboxed
    $('.materialboxed').materialbox();
    setTimeout(() => {
        anime();
    }, 800);
});

function anime(){
    const card=document.querySelectorAll(".card");
    for(let i=0;i<card.length;i++){
        card[i].classList.remove("animate__animated");
        card[i].classList.remove("animate__zoomIn");
        card[i].classList.remove("animate__fast");
    }
}