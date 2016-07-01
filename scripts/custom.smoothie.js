$(document).ready(function (event){
  /* ------------------ Smooth Scroll ------------------ */
      $('body').smoothScroll({
        delegateSelector: '.menu ul li a',
        easing: 'swing',
        speed: 400,
        afterScroll: function() {
          $(this).parent().parent().children("li").children("a").removeClass("current");
          $(this).addClass("current");
        }
      });
    
    $('.menu ul li').hover(function(event){
      event.preventDefault();
    });

});