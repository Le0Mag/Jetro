 $(function(){
  $('.slider__inner').slick({
    // slidesToShow: 1,
    // slideToScroll: 1,
    // dots: false,
    // arrows: false,
    // fade: true,
    asNavFor: '.slider__nav',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next arrow"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/previous.svg" alt="prev arrow"></button>',
  });

  $('.slider__nav').slick({
    // dots: false,
    slidesToShow: 6,
    slideToScroll: 6,
    asNavFor: '.slider__inner',
    focusOnSelect: true,
    // variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
        settings:{
          slidesToShow: 5,
          slideToScroll: 5,
        }
      },
      {
        breakpoint: 780,
        settings:{
          slidesToShow: 4,
          slideToScroll: 4,
        }
      },
      {
        breakpoint: 700,
        settings:{
          slidesToShow: 3,
          slideToScroll: 3,
        }
      },
      {
        breakpoint: 400,
        settings:{
          slidesToShow: 2,
          slideToScroll: 2,
        }
      }
    ],
  });

  $('.header__menu-btn').on('click', function(){
    // console.log('test');
    $('.header__menu .header__menu-list').slideToggle();
  });

});

