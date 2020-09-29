$(function () {
    $('.reviews__slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/slider/arrow-left.svg" alt="">&lt;</button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/slider/arrow-right.svg" alt="">&gt;</button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
              }
            },
        ]
    });
    $(function() {
        $('input[type="text"],select').styler();
    });
    $(".reviews__slider-rate").rateYo({
        rating: 4.5,
        // readOnly: true,
        spacing : "5px",
        starWidth: "20px", 
        ratedFill: "#faa31a",
        // normalFill: "#fff"
    });
    $(".travels__item-rate").rateYo({
        rating: 4,
        // readOnly: true,
        spacing : "5px",
        starWidth: "20px",
        ratedFill: "#ffea00",
        normalFill: "#e3e3e3"   
        // normalFill: "#fff"
    });
    $('.header__btn-menu').on('click',function(){
        $('.header__navigation ul').slideToggle();
    });
});