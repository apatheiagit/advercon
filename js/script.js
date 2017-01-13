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
  $('.open-block').click(function(){            
    $(this).next('.open-descr').animate({width: 'toggle'}, 'fast', 
     function(){        
        $(this).children('.open-descr-wrap').toggle();
     });
  });  
  $('.close').click(function(){
     $(this).parent().toggle('fast');
     $(this).parent().parent().animate({width: 'toggle'}, 'fast');
  });
})