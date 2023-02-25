$(document).ready(function(){
    $(".name__items").slick({
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 6000,
        easing: "ease",
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
    });
});