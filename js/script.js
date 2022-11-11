$(function(){
  //スムーススクロール
  $('a[href^="#"]').click(function(){
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({scrollTop: position}, 500, 'swing');
  });
});
//ハンバーガーメニュー
$('.header-inner__item-menu--icon').click(function () {
  $('.header-inner__item-menu--icon-line').toggleClass('active');
  $('.header-inner__item-menu').toggleClass('active');
});
$('.gnav-list__item--link').click(function () {
  $('.header-inner__item-menu--icon-line').toggleClass('active');
  $('.header-inner__item-menu').toggleClass('active');
});
//ページフェード表示
var fadeInTarget = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
  for (var i = 0; i < fadeInTarget.length; i++) {
    var rect = fadeInTarget[i].getBoundingClientRect().top;
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    var offset = rect + scroll;
    var windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 80) {
      fadeInTarget[i].classList.add('fade_in');
    }
  }
});
//ローディング直後のフェード表示
setTimeout(function(){
  $('.header').fadeIn(1000);
},200);
setTimeout(function(){
  $('.page-wrapper').fadeIn(1000);
},1000);