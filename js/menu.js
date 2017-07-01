function ustMove(hucre) {
 hucre.style.background = '#0099ff';
 hucre.style.color = '#FFFFFF';
}
function ustOut(hucre) {
 hucre.style.background = '#FFFFFF';
 hucre.style.color = '#000099';
}
function sayfaAc(adres) {
 if (adres.substring(0,7) == 'http://')
   yenipencere = window.open(adres); 
 else
  location = adres;
}



 $(document).ready(function(){
    $('#purpose').on('change', function() {
      if ( this.value == '0')
 
      {
        $(".english-menu").show();
      }
      else
      {
        $(".english-menu").hide();
      }
              if ( this.value == '1')
 
      {
        $(".turkish-menu").show();
      }
      else
      {
        $(".turkish-menu").hide();
      }
    });
});


$(document).ready(function(){
    $('#hideshow').on('click', function(event) {        
         $('.menus').toggle('show');
    });
});


//add smooth scrolling
$(document).ready(function() {
    
    'use strict';
   
    
    $('.nav-item, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    
    
});