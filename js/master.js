$(function(){
    var hasBeenTrigged = false;
    var navTrigged = true;
    var navOpened = false;
    
    var height = $(window).height();
    $(window).scroll(function() {
        if ($(this).scrollTop() >= height) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
            //console.log("You've scrolled down pixels.");
            if(!hasBeenTrigged){
                changeState(hasBeenTrigged);
                hasBeenTrigged = true;                
            }
        }else{
            if(hasBeenTrigged){
                changeState(hasBeenTrigged);
                hasBeenTrigged = false;      
            }
        }
    });

    $(function(){
        $('nav').data('size','big');
      });
      
      $(window).scroll(function(){
        if($(document).scrollTop() > 0)
      {
          if($('nav').data('size') == 'big')
          {
              $('nav').data('size','small');
              $('nav').stop().animate({
                  'padding-top':'0px'              
              },200);
              $('nav').css('background','#3b3b3b');
          }
      }
      else
        {
          if($('nav').data('size') == 'small')
            {
              $('nav').data('size','big');
              $('nav').stop().animate({
                'padding-top':'40px'
              },200);
              $('nav').css('background','transparent');
              
            }  
        }
      });

      $('.hamburger-icon').click(function(){
        close();
      });

      $('#home').click(function(){
        $('html, body').animate({
            scrollTop: $("#landingSection").offset().top
        }, 1000);
        return false;
        });

      $('#big-work').click(function(){
        $('html, body').animate({
            scrollTop: $("#workSection").offset().top
        }, 1000);
        return false;
        });


      $('#big-about').click(function(){
        $('html, body').animate({
            scrollTop: $("#aboutSection").offset().top
        }, 1000);
        return false;
        });


      $('#big-contact').click(function(){
        $('html, body').animate({
            scrollTop: $("#contactSection").offset().top
        }, 1000);
        return false;
        });

        $('#home').click(function(){
            $('html, body').animate({
                scrollTop: $("#landingSection").offset().top
            }, 1000);
            return false;
            });
    
          $('#small-work').click(function(){
            close();
            
            $('html, body').animate({
                scrollTop: $("#workSection").offset().top
            }, 1000);
            return false;
            });
    
    
          $('#small-about').click(function(){
            close();
            
            $('html, body').animate({
                scrollTop: $("#aboutSection").offset().top
            }, 1000);
            return false;
            });
    
    
          $('#small-contact').click(function(){
            close();            
            $('html, body').animate({
                scrollTop: $("#contactSection").offset().top
            }, 1000);
            return false;
            });
      


    var changeState = function(has){
        if(has){
            $('footer').css('z-index','0');            
        }else{
            $('footer').css('z-index','4');
        }
    }

    var changeNav = function(has){
        if(has){
            console.log("TRUE");            
            $('nav').css('padding-top','40px');            
        }else{
            console.log("NOT");
            $('nav').css('padding-top','5px');            
            
        }
    }

    var close = function(){
        if(navOpened){
            $('.smaller-ul').css('left','100vw');
        }else{
            $('.smaller-ul').css('left','0');
        }
        navOpened = !navOpened;
    }
});