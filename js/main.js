$(function(){
  $('.slider__inner').slick({
    slidesToShow: 1,
    slideToScroll: 1,
    dots: false,
    // arrows: false,
    fade: true,
    asNavFor: '.slider__nav',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next arrow"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/previous.svg" alt="prev arrow"></button>',
  });

  $('.slider__nav').slick({
    dots: false,
    slidesToShow: 5,
    slideToScroll: 1,
    asNavFor: '.slider__inner',
    focusOnSelect: true,
    variableWidth: true,
    arrows: false,
  });

});

