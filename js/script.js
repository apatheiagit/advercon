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
  var paddingTop = '95px';
  if ($(window).height() < 800){
    paddingTop = '20px';
  }
  var speed = 1500;
  var speed2 = 1500;
  var mobile = detectmob();
  if (!mobile){
    $('#advercon').fullpage({            
      anchors:['home', 'services', 'projects', 'contacts'],
      verticalCentered: false,
      paddingTop: paddingTop,
      sectionSelector: '.somit',
      resize : false,
      scrollOverflow:true,
      css3: true,
      navigation: true,
      navigationPosition: 'left',
      afterLoad: function(anchorLink, index){
        if(anchorLink == 'projects'){
         
        }
      }
    })
  }
})
function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 || $(window).width() < 768
 ){
    return true;
  }
 else {
    return false;
  }
}