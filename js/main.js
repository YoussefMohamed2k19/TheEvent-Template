$(".owl-carousel").owlCarousel({
  dots: true,
  autoplay: true,
  loop: true,
  margin: 10,
  nav: false,
  center:true,
  responsive: {
    0: {
      dotsEach: 1,
      items: 1
    },
    600: {
      dotsEach: 1,
      items: 3
    },
    1200: {
      dotsEach: 1,
      items: 5
    }
  }
});


  $(function() {
  function close() {
    $('body').removeClass('has-active-menu');
    setTimeout(function(){
      $('.nav-slider').removeClass('toggling');
    }, 500);
  }

  function open() {
    $('body').addClass('has-active-menu');
    $('.nav-slider').addClass('toggling');
  }

  $('.nav-mask').click(close);
  $('.navbar-toggler').click(open);
  });

$(document).ready(function(){
  $('.venobox').venobox({
          overlayColor: 'rgba(6, 12, 34, 0.9)',
          closeBackground: 'rgba(6, 12, 34, 0.1)',
          closeColor: '#fff',
          titleattr: 'data-title',    // default: 'title'
          infinigall: true,          // default: false
          spinner: 'double-bounce'
  }); 
   // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function(){
    $(this).prev(".card-header").find(".fas").addClass("fa-minus-circle").removeClass("fa-plus-circle");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
    $(this).prev(".card-header").find(".fas").removeClass("fa-plus-circle").addClass("fa-minus-circle");
  }).on('hide.bs.collapse', function(){
    $(this).prev(".card-header").find(".fas").removeClass("fa-minus-circle").addClass("fa-plus-circle");
  });

  //CHANGE NAVBAR BACKGROUND ON SCROLL
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>50){
      $("#nav").css("background","#080B1C");}
      else{
      $("#nav").css("background","transparent");
      }
  });

  new WOW().init();

  
  var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    
    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();
      
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');
        
        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });

});

jQuery(document).ready(function() {
  
  var btn = $('#back-to-top');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      btn.addClass('show-button');
    } else {
      btn.removeClass('show-button');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});
