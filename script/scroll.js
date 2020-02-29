if (window.pageYOffset !== 0) {
    $('#spacing').removeClass('smooth');
    $('#spacing').height('0');
    $('#scroll').addClass('fadeOut');
    $('#scroll').addClass('invis');
    $('#scroll').removeClass('bouncing');
}


//Firefox
 $('body').bind('DOMMouseScroll', function(e){
     if(e.originalEvent.detail > 0) {
         //scroll down
         $('#spacing').height('0');
         $('#scroll').addClass('fadeOut');
         $('#scroll').addClass('invis');
         $('#scroll').removeClass('bouncing');
     }
     //prevent page fom scrolling
     return false;
 });

 //IE, Opera, Safari
 $('body').bind('mousewheel', function(e){
     if(e.originalEvent.wheelDelta < 0) {
         //scroll down
         $('#spacing').height('0');
         $('#scroll').addClass('fadeOut');
         $('#scroll').addClass('invis');
         $('#scroll').removeClass('bouncing');
     }
     //prevent page fom scrolling
     return false;
 });