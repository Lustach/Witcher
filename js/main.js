var mySwiper = new Swiper('.swiper-container', {
    // speed: 400,
    // spaceBetween: 100,
    slidesPerView:2,
    loop:true,
    navigation: {
        nextEl: '.arrow',
      },
});
// console.log(window.screen.width);
// if(window.screen.width<=375){
//     mySwiper.params.slidesPerView=1
//     let classes= document.querySelectorAll('.series-2')
//     console.log(classes);
//     for (let index = 0; index < classes.length; index++) {
//         console.log(classes[index].style.display);
//         classes[index].style.display='none'
//     }
// }
let btn = document.querySelector('.button')
// console.log(btn);
btn.addEventListener('click',(e)=>{
    console.log(e)
})
// console.log(btn);
// console.log(mySwiper);

let body = document.querySelector('body')
// window.screen.addEventListener('change',(e)=>{
//     console.log(screen.width);
// })
// window.addEventListener('resize',function(){
//     // alert('Размеры окна изменились');
//     switch (window.screen.width) {
//         case 375:
//             console.log(375);
//             mySwiper.params.slidesPerView=1
//             console.log(mySwiper.params.slidesPerView);
//             break;
//         case 425:
//             console.log(425);
//         default:
//             break;
//     }
//     // console.log(window.screen.width);
// });

// let w = window.screen.availWidth;
// console.log(w);
// console.log(screen.width);