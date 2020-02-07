var mySwiper = new Swiper('.swiper-container', {
    // speed: 400,
    // spaceBetween: 100,
    slidesPerView:2,
    loop:true,
    navigation: {
        nextEl: '.arrow',
      },

});
console.log('gav');
let btn = document.querySelector('.button')
// console.log(btn);
btn.addEventListener('click',(e)=>{
    console.log(e)
})
// console.log(btn);
console.log(mySwiper);