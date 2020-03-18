$(function(){
  $('.btn').on('click',function(){
    $('.nav').addClass('drawer-open');
    $('.btn').fadeOut(500);
  });
  $('.close-btn').on('click',function(){
    $('.nav').removeClass('drawer-open');
    $('.btn').fadeIn(1000);
  });
});
// 「.css()」を名付けたclassの中にあるプロパティを変更するものだと思い込んでいたが
// 実際は<div class="xxxx" style="xxxx:yyyy">となるものだと理解した。
// ------ CSS -------
// .nav{
//   width: 300px;
//   transform: translateX(100%);
//   background:#808080;
//   position: absolute;
//   transition: 0.5s;
//   top: 0;
//   right: 0;
//   height: 100vh;
//   padding-top: 50px;
// }
// .drawer-open{
//   transform: translateX(0);
//   transition: 0.5s;
// }
