$(document).ready(function() {

  //Populating works
  var works = 37;
  var work;
  var workLink = "work-link";

  for (var i = 1; i < works; i+=1) {
    // $('ul.works').add('<li class="work-item col-25"><a href="works.html" class="col-25"><div class="menu-image"><img src="assets/images/works/work-1.jpg"></div></a><div class="menu-caption" style="display: none"><a href="works.html" class="col-25"><h2>March 19, 2014</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p></a></div></li>');
    work += '<li class="work-item col-25"><a href="#" class="col-25 '+workLink+'"><div class="menu-image"><img src="assets/images/works/work-'+i+'.jpg"></div></a><div class="menu-caption" style="display: none"><a href="#" class="col-3 '+workLink+'"><h2></h2><p>Click to enlarge</p></a></div></li>';
  };
  $('ul.works').html(work);

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

      setTimeout(changeBackground, 10000);

  // click to enlarge photo
  
  $('.works .work-item').click(function() {
    var a = $(this).find('.menu-image img').attr('src');
    // console.log(a);
    // $('.photo img').css('src', a);
    document.getElementById("full-image").src = a;
    $('.photo-viewer-container').fadeIn(100);
  });

  $('.close-button-container').click(function() {
    $('.photo-viewer-container').fadeOut(100);
  });

  $('.photo-viewer-container').click(function() {
    $('.photo-viewer-container').fadeOut(100);
  });

  $('#bcard').click(function() {
    var a = $(this).attr('src');
    document.getElementById("full-image").src = '../elizerddelacruz.github.io/assets/images/callcard.jpg';
    
    $('.photo-viewer-container').fadeIn(100);
      
    });

  $('.photo-viewer-container').click(function() {
    $('.photo-viewer-container').fadeOut(100);
  });

    $('#bcard').click(function() {
    var a = $(this).attr('src');
    document.getElementById("full-image").src = '../elizerddelacruz.github.io/assets/images/callcard.jpg';
    
    $('.photo-viewer-container').fadeIn(100);
      
    });

  $('#lhead').click(function() {
    var a = $(this).attr('src');
    document.getElementById("full-image").src = '../elizerddelacruz.github.io/assets/images/letterhead.png';
    
    $('.photo-viewer-container').fadeIn(100);
      
    });

});






// changing background

var currentBackground = 0;
var backgrounds = [];
backgrounds[0] = '../elizerddelacruz.github.io/assets/images/stock/back6.jpg';
backgrounds[1] = '../elizerddelacruz.github.io/assets/images/stock/back5.jpg';
backgrounds[2] = '../elizerddelacruz.github.io/assets/images/stock/back4.jpg';

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

