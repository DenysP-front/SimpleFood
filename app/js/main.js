


$(function () {

  $('.reviews-slider').slick({
    arrows: true,
    dots: true,
    responsive: [{
      breakpoint: 576,
      settings: {
        dots: false
      }
    }],
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,

    appendArrows: $('.reviews__arrows'),
    appendDots: $('.reviews__arrows'),

  });

});

$(function () {

  $('.proposes-slider__list').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    leftMode: true,
    appendArrows: $('.proposes-slider__arrows'),


    responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 820,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
      }
    }
    ]
  });

});

$(function () {
  $('.restaurant__box').slick({
    responsive: [{
      breakpoint: 3000,
      settings: 'unslick'
    },

    {
      breakpoint: 1100,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    }
    ]

  });
});

$(function () {
  $('.discount__list').slick({
    responsive: [{
      breakpoint: 3000,
      settings: 'unslick'
    },

    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },

    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    }
    ]

  });
});

$(function () {
  $('.about-product__gallery').slick({
   
    slidesToShow: 1, 
    appendArrows: $('.about-product__arrow'),

    responsive: [{
      breakpoint: 560,
      settings: {
        arrows: false,
      }
    },

    ]

    
});
});

$(function () {
  $('.about-product__popup').slick({
   
    slidesToShow: 1,
    dots: true, 
});
});



$(function () {

  

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $('.breadcrumbs').addClass('breadcrumbs__padding')
    }
    else {
      $('.breadcrumbs').removeClass('breadcrumbs__padding')
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $('.breadcrumbs-product').addClass('breadcrumbs-product__padding')
    }
    else {
      $('.breadcrumbs-product').removeClass('breadcrumbs-product__padding')
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $('.header__fixed').addClass('sticky')
    }
    else {
      $('.header__fixed').removeClass('sticky')
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
      $('.header__top').addClass('menu__padding')
    }
    else {
      $('.header__top').removeClass('menu__padding')
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 650) {
      $('.header__fixed').addClass('menu__animation')
    }
    else {
      $('.header__fixed').removeClass('menu__animation')
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 800) {
      $('.header__fixed').addClass('opacity')
    }
    else {
      $('.header__fixed').removeClass('opacity')
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $('.hero').addClass('hero__padding')
    }
    else {
      $('.hero').removeClass('hero__padding')
    }
  });

});


document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile');
  const bodyLock = document.querySelector('body');
  const btnClose = document.querySelector('.mobile__button');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu--active');
    if (mobileMenu.classList.contains('menu--active')) {
      bodyLock.classList.add('lock');
    }
    else {
      bodyLock.classList.remove('lock');
    }
  });

  btnClose.addEventListener('click', () => {
    mobileMenu.classList.remove('menu--active');
    bodyLock.classList.remove('lock');
  });
});

document.addEventListener('DOMContentLoaded', () => {

  const filter = document.querySelector('.catalog__button');
  const catalogMenu = document.querySelector('.catalog__menu');
  const bodyLock = document.querySelector('body');
  const catalogClose = document.querySelector('.catalog__button--closed');


  filter.addEventListener('click', () => {
    catalogMenu.classList.toggle('catalog__menu--active');
    if (catalogMenu.classList.contains('catalog__menu--active')) {
      bodyLock.classList.add('lock');
    }
    else {
      bodyLock.classList.remove('lock');
    }
  });

  catalogClose.addEventListener('click', () => {
    catalogMenu.classList.remove('catalog__menu--active');
    bodyLock.classList.remove('lock');
  });
});

document.addEventListener('DOMContentLoaded', () => {

  const gallery = document.querySelector('.about-product__gallery');
  const big = document.querySelector('.about-product__end');
  const close = document.querySelector('.about-product__close');
  const bodyLock = document.querySelector('body');
  


  gallery.addEventListener('click', () => {
    big.classList.toggle('about-product__end--active');
    if (big.classList.contains('about-product__end--active')) {
      
      
      bodyLock.classList.add('lock');
    }
    else {
      bodyLock.classList.remove('lock');
    }
  });

  close.addEventListener('click', () => {
    big.classList.remove('about-product__end--active');
    bodyLock.classList.remove('lock');
  });
});


$(function () {
  var $range = $(".catalog-slider__range"),
    $inputFrom = $(".catalog-slider__field--from"),
    $inputTo = $(".catalog-slider__field--to"),
    instance,
    min = 0,
    max = 1200,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    hide_min_max: true,
    hide_from_to: true,
    onStart: updateInputs,
    onChange: updateInputs,
    prefix: "$"
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;
    $inputFrom.prop("value", '' + from);
    $inputTo.prop("value", '' + to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });

});

$('.catalog__select').styler();
$('.about-product__quantity').styler();

$('.star').rateYo({
  starWidth: "18px",
  normalFill: "rgba(193, 193, 193, 0.3)",
  ratedFill: "#FFB800",
  readOnly: true,
  spacing: "4px"

});

$('.add-review__star').rateYo({
  starWidth: "30px",
  normalFill: "rgba(193, 193, 193, 0.3)",
  ratedFill: "#FFB800",
});

// $(function () {
//   var mixer = mixitup('.description__wrapper');
// }); 

var containerEl = document.querySelector(".description__wrapper");

var mixer = mixitup(containerEl, {
  load: {
    filter: '.category-a'
  },
  animation: {
    enable: true,
    effects: 'scale fade',
    duration: 300,
  },


});







// $('#description').on('click', function (e) {
//   $('.description-info').slideToggle();
//   e.preventDefault();
// });





