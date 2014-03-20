$(document).ready(function() {

      $('.menu > li').mouseleave(function(){
            var ghost = $(this).find('.ghost-title');
            // $(ghost).stop().animate({'backgroundColor': '#000'}, 400);
            $(ghost).stop().animate({'backgroundColor': '#ff0062'}, 400);

            var menuCaption = $(this).find('.menu-caption');
            $(menuCaption).stop().fadeOut(400);

            var menuTitle = $(this).find('h1');
            $(menuTitle).stop().animate({'color': '#FFF'}, 400);
      }); 

      $('.menu > li').mouseenter(function(){
            var ghost = $(this).find('.ghost-title');
            $(ghost).stop().animate({'backgroundColor': '#FFF'}, 400);

            var menuCaption = $(this).find('.menu-caption');
            $(menuCaption).stop().fadeIn(400);

            var menuTitle = $(this).find('h1');
            $(menuTitle).stop().animate({'color': '#000'}, 400);
      });

      //looping of background images

      // var currentBackground = 1;
      // var backgrounds = [];
      // backgrounds[0] = "../images/stock/back1.jpg";
      // backgrounds[1] = "../images/stock/back2.jpg";
      // backgrounds[2] = "../images/stock/back3.jpg";
      // backgrounds[3] = "../images/stock/back6.jpg";

      // $('.background-image').fadeOut(100, function() {
      //       $(this).css({
      //             // 'background-image' : "url('" + backgrounds[currentBackground] + "')"
      //             // 'background-image' : url('../images/stock/back1.jpg')
      //       });
      //       $(this).fadeIn(100);
      // });
      setTimeout(changeBackground, 10000);
});

var currentBackground = 0;
var backgrounds = [];
backgrounds[0] = '../assets/images/stock/back6.jpg';
backgrounds[1] = '../assets/images/stock/back5.jpg';
backgrounds[2] = '../assets/images/stock/back4.jpg';

function changeBackground() {
    currentBackground++;
    if(currentBackground > 2) currentBackground = 0;

    $('.background-image').hide(0,function() {
        $('.background-image').css({
            'background-image' : "url('" + backgrounds[currentBackground] + "')"
        });
        $('.background-image').show();
    });


    setTimeout(changeBackground, 10000);
}

$(document).ready(function() {
            
});