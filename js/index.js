$(document).ready(function(){

$('.first-page__slider').slick({
  prevArrow: '<button type="button" class="slick-prev slider__btn slider__btn-left"><svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.50639C-0.0976295 7.89692 -0.0976295 8.53008 0.292892 8.92061L6.65685 15.2846C7.04738 15.6751 7.68054 15.6751 8.07107 15.2846C8.46159 14.894 8.46159 14.2609 8.07107 13.8704L2.41422 8.2135L8.07107 2.55665C8.46159 2.16612 8.46159 1.53296 8.07107 1.14243C7.68054 0.751909 7.04738 0.751909 6.65685 1.14243L0.292892 7.50639ZM41 7.2135L1 7.2135V9.2135L41 9.2135V7.2135Z" fill="white"/></svg></button>',
  nextArrow: '<button type="button" class="slick-next slider__btn slider__btn-right"><svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.7071 8.92061C41.0976 8.53008 41.0976 7.89692 40.7071 7.50639L34.3431 1.14243C33.9526 0.751909 33.3195 0.751909 32.9289 1.14243C32.5384 1.53296 32.5384 2.16612 32.9289 2.55665L38.5858 8.2135L32.9289 13.8704C32.5384 14.2609 32.5384 14.894 32.9289 15.2846C33.3195 15.6751 33.9526 15.6751 34.3431 15.2846L40.7071 8.92061ZM0 9.2135H40V7.2135H0L0 9.2135Z" fill="white"/></svg></button>',
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

$('.slick-dots>li').html("<span class='slider__dot'></span>");


$('.first-page__show-text').on('click',function() {
       if($(this).prev().is(':visible')) {
        $(this).prev().hide('slow');
        $(this).html("<p>Подробнее</p>");
    } else {
        $(this).prev().show('slow');
        $(this).html("<p>Скрыть</p>");
    }
});
$('.news__show-text').on('click',function() {
       if($(this).prev().is(':visible')) {
        $(this).prev().hide('slow');
        $(this).html("<p>Читать полностью</p>");
    } else {
        $(this).prev().show('slow');
        $(this).html("<p>Скрыть</p>");
    }
});

  $(".menu__btn").click(function() {
    $('.menu__btn').toggleClass("menu__btn--active");
    $('.menu__list').toggleClass("menu__list--active");
    });

      $(".menu__list-link").click(function() {
    $('.menu__btn').removeClass("menu__btn--active");
    $('.menu__list').removeClass("menu__list--active");
    });

    $('#form').validate ( {
  rules: {
    email: {
      required: true,
      email: true
    },
    name: {
      required: true,
      minlength:3
    }
  },
  messages: {
    email: {
      required: "Введите email!",
      email: "Введите корректный email!"
    },
    name: {
      required: "Введите имя!",
      minlength:"Не менее 3-х символов!"
    }
  },
  highlight: function (element) {
    $(element).addClass('invalid');
                
  },
    unhighlight: function (element) {
    $(element).removeClass('invalid');
                
  },
  submitHandler: function() {
    alert("Заявка отправлена, оператор свяжется с Вами в ближайшее время.");
    $('.footer__form-input').val("");
    $('.footer__form-textarea').val("");
  }
 
});


});