$(document).ready(function() {

      $('.menu-item').mouseleave(function(){
            var ghost = $(this).find('.ghost-title');
            $(ghost).stop().animate({'backgroundColor': '#000'}, 400);

            var menuCaption = $(this).find('.menu-caption');
            $(menuCaption).stop().fadeOut(400);

            var menuTitle = $(this).find('h1');
            $(menuTitle).stop().animate({'color': '#FFF'}, 400);
      }); 
      $('.menu-item').mouseenter(function(){
            var ghost = $(this).find('.ghost-title');
            $(ghost).stop().animate({'backgroundColor': '#FFF'}, 400);

            var menuCaption = $(this).find('.menu-caption');
            $(menuCaption).stop().fadeIn(400);

            var menuTitle = $(this).find('h1');
            $(menuTitle).stop().animate({'color': '#000'}, 400);
      });
});