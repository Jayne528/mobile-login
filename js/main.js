$(document).ready(function () {
    $('.hamburger-menu').click(function (e) { 
        e.preventDefault();
        $('.hamburger-menu,.menu,.logo').toggleClass('active');
    });
    $('.home').click(function (e) { 
        e.preventDefault();
        $('.hamburger-menu,.menu,.logo').toggleClass('active');
    });
});