$(document).ready(function() {
      $('.menu-item').hover(function() {
            // $(this).find('.ghost-title').animate({ "backgroundColor": "red" }, "slow" );
            $(this).stop().animate({backgroundColor:'#4E1402'}, 300);


            
      });

      // $('img').hover(function() {
      // width = $('img').width() * zoom;
      // height = $('img').height() * zoom;

      // $(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:300});
      // //$(this).find('div.caption').stop(false,true).fadeIn(300);
      // },
      // function() {

      // $(this).find('img').stop(false,true).animate({'width':$('img').width(), 'height':$('img').height(), 'top':'0', 'left':'0'}, {duration:300});   
      // //$(this).find('div.caption').stop(false,true).fadeOut(400);
      // });

});