$(function () {

    $('.reviews-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev">&lt;</button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next">&gt;</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
        ]
    });
    $(function () {
        $('input[type="text"],select').styler();
    });
    $(".reviews-slider__rate").rateYo({
        rating: 4.5,
        // readOnly: true,
        spacing: "5px",
        starWidth: "20px",
        ratedFill: "#faa31a",
        readOnly: true
    });
    $(".travels-item__rate").rateYo({
        rating: 4,
        spacing: "5px",
        starWidth: "20px",
        ratedFill: "#ffea00",
        normalFill: "#e3e3e3"
    });
    $('.btn-burger-menu').on('click', function () {
        $('.navigation__list').slideToggle();
    });

});

let navigationHeight = document.getElementById('navigation').offsetHeight;

function navigateScroll(elem) {
    let target = $(elem).attr('href').split('#');/*Значение атрибута href разделяем на значения до знака "#" и после него и помещаем значения в массив target*/
    let targetAnchor = "#" + target[1];/*Значение якоря к которому должна вести ссылка*/
    $('.navigation__list').slideToggle();
    $([document.documentElement, document.body]).animate({/*Делаем плавный скролл к якорной ссылке с отступом от верха страницы в размере высоты шапки*/
        scrollTop: $(targetAnchor).offset().top - navigationHeight
    }, 1000);
}

// scroll body to 0px on click
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
$('#back-to-top').click(function () {
    $('body, html').animate({
        scrollTop: 0
    }, 800);
});
