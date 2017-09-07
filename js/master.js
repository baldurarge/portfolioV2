var ready = false;

var changeSize = function(width){
  width = width/1.5;
  $('.workStuff').css('height',width);
  $('.workStuffBig').css('height',width+width);
}

$w = $('.workStuff').width();
ready = true;
changeSize($w);





$( document ).ready(function() {



  $(document).scroll(function() {
      $work = $('#workSection').offset().top;
      $doc = $(document).scrollTop();

      if(($work - $doc) <= 650){
        $('#1').stop().fadeOut();
        $('#2').stop().fadeOut();

      }else{
        $('#1').stop().fadeIn();
        $('#2').stop().fadeIn();
      }

      if($(document).scrollTop()>100){
        $('nav').addClass('navScroll');
      }else{
        $('nav').removeClass('navScroll');
      }
  })

  $("#home").click(function (){
    closeNav();
        $('html, body').animate({
            scrollTop: $("#landingSection").offset().top
        }, 500);
    });

    $("#work").click(function (){
      closeNav();
          $('html, body').animate({

              scrollTop: $("#workSection").offset().top
          }, 500);
      });
      $("#about").click(function (){
        closeNav();
            $('html, body').animate({

                scrollTop: $("#aboutSection").offset().top
            }, 500);
        });
        $("#skills").click(function (){
          closeNav();
              $('html, body').animate({

                  scrollTop: $("#aboutSection").offset().top
              }, 500);
          });

          $("#contact").click(function (){
            closeNav();
                $('html, body').animate({

                    scrollTop: $("#contactSection").offset().top
                }, 500);
            });




            $("#work2").click(function (){
              closeNav();
                  $('html, body').animate({

                      scrollTop: $("#workSection").offset().top
                  }, 500);
              });
              $("#about2").click(function (){
                closeNav();
                    $('html, body').animate({

                        scrollTop: $("#aboutSection").offset().top
                    }, 500);
                });
                $("#skills2").click(function (){
                  closeNav();
                      $('html, body').animate({

                          scrollTop: $("#aboutSection").offset().top
                      }, 500);
                  });

                  $("#contact2").click(function (){
                    closeNav();
                        $('html, body').animate({

                            scrollTop: $("#contactSection").offset().top
                        }, 500);
                    });

  $(function(){
        $("#iCreate").typed({
            strings: [" create web and mobile applications."," design web and mobile applications."," create visual identity and motion graphics."," create photography and print media."],
            typeSpeed: 20,
            loop: true,
            showCursor: false,
        });
    });

    $w = $('.workStuff').width();
    ready = true;
    changeSize($w);

});


$( window ).resize(function() {
  changeSize($('.workStuff').width());
});
