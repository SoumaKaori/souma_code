$(function(){
  $(window).scroll(function(){
    $('.fadein').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > targetElement - windowHeight + 200){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    speed:100,
    autoplay: {
    delay: 3000,
    disableOnInteraction: true
   },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
  });

});

var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 600);
     return false;
  });
$(function() {
    $('.policy').on('click',function(){
      $('.js-modal').fadeIn();
      return false;
    });
    $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
    });

  });
  $(function(){
  $('.btn').on('click',function(){
    $('body').addClass('fixed');
    $('.nav').addClass('drawer-open');
    $('.btn').css('display','none');
    $('.btn').fadeOut(500);
  });
  $('.close-btn').on('click',function(){
    $('.nav').removeClass('drawer-open');
    $('body').removeClass('fixed');
    $('.btn').fadeIn(1000);
  });
});
