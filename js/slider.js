$(function(){
  //スライダー
  $('.slider-block__list').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  });
});