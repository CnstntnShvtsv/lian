"use strict";

// Плавная прокрутка:
var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
})

// Кнопка наверх:
var amountScrolled = 200;

$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
})

$('#back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
})

// Навбар:
$('.navbar-nav .nav-link').click(function () {
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).toggleClass('active');
})

// Фильтры:
$('.main-filters .filter-link').click(function () {
    $('.main-filters .filter-link').removeClass('active');
    $(this).toggleClass('active');
})

// Слайдер:
$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true
    });

    $('.btn-prev').on('click', function () {
        $('.slider').slick('slickPrev');
    });

    $('.btn-next').on('click', function () {
        $('.slider').slick('slickNext');
    });
})