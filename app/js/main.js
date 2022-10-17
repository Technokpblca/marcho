$(function(){
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000
  });

  $(".stars").rateYo({
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    starWidth: "18px",
    readOnly: true
  });

});
