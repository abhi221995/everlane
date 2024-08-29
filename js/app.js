
$(document).ready(function(){


  let stickynavTop = $('.navbar').offset().top;

  function stickyNav(){
    let scrollTop = $(window).scrollTop();

    if(scrollTop > stickynavTop){
      $('.navbar').addClass('sticky');
    }

    else{
      $('.navbar').removeClass('sticky');
    }
  };

  stickyNav();
  $(window).scroll(function(){
    stickyNav();
  });

  // SIGN IN BTN FUNCTION //

  $('#sign-in-btn').click(function(){
    $('.form-detail').slideDown(1000)
  });

  $('.s50').click(function(){
    $('.form-detail').slideUp(1000)
  });

  // SUCCESS PART // 

  // $('#log').click(function(){
  //   $('.sucess-div').show();
  // });


});


// FAVORITES PART //


    var swiper = new Swiper("#swiper1", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints:{
        0:{
          slidesPerView: 1,
          spaceBetween: 30,
        },

        640:{
          slidesPerView: 2,
          spaceBetween: 30,
        },

        767:{
          slidesPerView: 3,
          spaceBetween: 30,
        },

        1024:{
          slidesPerView: 4,
          spaceBetween: 30,
        },

      }
    });


    // FEEDBACK PART //

    var swiper = new Swiper("#swiper2", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    // ARTICAL PART SWIPER //

    var swiper = new Swiper("#swiper3", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints:{

        0:{
          slidesPerView: 1,
          spaceBetween: 30,
        },

        640:{
          slidesPerView: 2,
          spaceBetween: 30,
        },

        767:{
          slidesPerView: 3,
          spaceBetween: 30,
        },

        1024:{
          slidesPerView: 3,
          spaceBetween: 30,
        },

      }


    });


