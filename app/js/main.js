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
  $('.restaurant__box').slick({
    responsive: [{
      breakpoint: 1905,
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

