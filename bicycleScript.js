$(function(){
  
  $(".container").show();

  $("header").show();

  $('.slider').slick({
      autoplay: true,
      pauseOnDotsHover: true,
      autoplaySpeed: 2000,
      fade: true,
      speed: 3000,
      dots: true,
      arrows: false,
      accessibility: false,
      centerPadding: 0,
  });
    
});
