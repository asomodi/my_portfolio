$(document).ready(function() {
  $('.menu-toggler').on('click', function() {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.nav-link').on('click', function() {
    $('.menu-toggler').toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('#up').on('click', function() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  });
});
