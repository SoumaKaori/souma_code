$(function(){
  var top = $('#top');
  top.hide();

  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      top.fadeIn();
    }else{
      top.fadeOut();
    }
  });
  top.click(function(){
    $('body,html').animate({
      scrollTop:0
    },500);
  });
});
