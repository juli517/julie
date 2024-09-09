var swiper = new Swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickble: true,

    },
    navigation: {
        nextE1:"swiper-button-next",
        prevE1:"swiper-button-prev",
    }
});

var swiper = new Swiper(".mySwiper-2",{
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWhiteBlank:true,
    navigation: {
        nextE1:"swiper-button-next",
        prevE1:"swiper-button-prev",
    },
    breakpoints : {
        0: {
            alidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        }
            
    }
});
let tabInputs = document.querySelectorAll(".tabInput");
tabInputs.forEach(function(input) {
    input.addEventListener('change', function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});
