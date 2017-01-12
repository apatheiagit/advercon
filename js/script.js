$(function(){
  $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
          $('.icon-to-top').fadeIn();
      } else {
          $('.icon-to-top').fadeOut();
      }
  });
  $('.icon-to-top').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 400);
      return false;
  });
  $('.service-block').click(function(){            
        $(this).next('.service-descr').animate({width: 'toggle'}, 'fast', 
         function(){ 
            console.log($(this));
            $(this).children('.service-descr-wrap').toggle();
         });
  });
  $('.close-service').click(function(){
     $(this).parent().toggle('fast');
     $(this).parent().parent().animate({width: 'toggle'}, 'fast');
  });
})