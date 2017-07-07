$(document).on("scroll",function(){
    if($(document).scrollTop()>10){
        $("header").removeClass("large").addClass("small");
        $("nav").removeClass("bot");
        $(".head").css("height", "0px");
        $(".inicio").css("top", "120px");
        $(".retrato").css("height", "0px");
        $(".titulo").css("height", "0px");
    } else{
        $("header").removeClass("small").addClass("large");
        $("nav").addClass("bot");
        $(".head").css("height", "160px");
        $(".inicio").css("top", "240px");
        $(".inicio").css("min-height", "300px");
        $(".retrato").css("height", "160px")
        $(".titulo").css("height", "auto");
    }
});


$(document).ready(function(){
    $(".logo").hover(function(){
        $(this).css("transform", "scale(1.05,1.05)");
        }, function(){
        $(this).css("transform", "scale(1.0,1.0)");
    });
});

$(document).ready(function(){
    $(".contenido").hover(function(){
        $(this).css("overflow-y", "scroll");
        }, function(){
        $(this).css("overflow-y", "hidden");
    });
});

$(document).ready(function(){
      $('.carousel').carousel({
        autoplay:true,
        dist:-200,
        shift:-55,
      });
      autoplay()
      function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 2500);
      }
      $('.carousel').carousel({fullWidth: false});
    });

/* Secciones */

$(document).ready(function(){
  $('#sec1').hover(function(){
    $('#tit1').css("height", "0px");
    $('#info1').css("height", "100%");
    $('#sec1').css("background-color", "rgb(143, 54, 223)");
  }, function(){
    $('#tit1').css("height", "100%");
    $('#info1').css("height", "0px");
    $('#sec1').css("background-color", "white");
  });
});

$(document).ready(function(){
  $('#sec2').hover(function(){
    $('#tit2').css("height", "0px");
    $('#info2').css("height", "100%");
    $('#sec2').css("background-color", "rgb(143, 54, 223)");
  }, function(){
    $('#tit2').css("height", "100%");
    $('#info2').css("height", "0px");
    $('#sec2').css("background-color", "white");
  });
});

$(document).ready(function(){
  $('#sec3').hover(function(){
    $('#tit3').css("height", "0px");
    $('#info3').css("height", "100%");
    $('#sec3').css("background-color", "rgb(143, 54, 223)");
  }, function(){
    $('#tit3').css("height", "100%");
    $('#info3').css("height", "0px");
    $('#sec3').css("background-color", "white");
  });
});

$(document).ready(function(){
  $('#sec4').hover(function(){
    $('#tit4').css("height", "0px");
    $('#info4').css("height", "100%");
    $('#sec4').css("background-color", "rgb(143, 54, 223)");
  }, function(){
    $('#tit4').css("height", "100%");
    $('#info4').css("height", "0px");
    $('#sec4').css("background-color", "white");
  });
});

$(document).ready(function(){
  $('#sec5').hover(function(){
    $('#tit5').css("height", "0px");
    $('#info5').css("height", "100%");
    $('#sec5').css("background-color", "rgb(143, 54, 223)");
  }, function(){
    $('#tit5').css("height", "100%");
    $('#info5').css("height", "0px");
    $('#sec5').css("background-color", "white");
  });
});

$(document).ready(function(){
  $('#sec6').hover(function(){
    $('#tit6').css("height", "0px");
    $('#info6').css("height", "100%");
    $('#sec6').css("background-color", "rgb(143, 54, 223)");
  }, function(){
    $('#tit6').css("height", "100%");
    $('#info6').css("height", "0px");
    $('#sec6').css("background-color", "white");
  });
});

$(document).ready(function(){
  $('#sec7').hover(function(){
    $('#tit7').css("height", "0px");
    $('#info7').css("height", "100%");
    $('#sec7').css("background-color", "rgb(143, 54, 223)");
  }, function(){
    $('#tit7').css("height", "100%");
    $('#info7').css("height", "0px");
    $('#sec7').css("background-color", "white");
  });
});


/* Reproductores */

$(document).ready(function(){
$('#jquery_jplayer_1').jPlayer({
  ready: function(){
    $(this).jPlayer("setMedia",{
      title: "Round Dance by Bela Bartok",
      mp3: "audio/round_dance.mp3"
    });
  },
  supplied:"mp3",
  wmode:"window",
  useStateClassSkin: true,
  autoBlur: false,
  smoothPlayBar:true,
  keyEnabled:true,
  remainingDuration:true,
  toggleDuration:true
});
});

$(document).ready(function(){
$('#jquery_jplayer_2').jPlayer({
  ready: function(){
    $(this).jPlayer("setMedia",{
      title: "Menuet et Badinerie",
      mp3: "audio/minuet_badinerie.mp3"
    });
  },
  supplied:"mp3",
  wmode:"window",
  useStateClassSkin: true,
  autoBlur: false,
  smoothPlayBar:true,
  keyEnabled:true,
  remainingDuration:true,
  toggleDuration:true
});
});

$(document).ready(function(){
$('#jquery_jplayer_3').jPlayer({
  ready: function(){
    $(this).jPlayer("setMedia",{
      title: "Für Elise - Beethoven",
      mp3: "audio/fur_elise.mp3"
    });
  },
  supplied:"mp3",
  wmode:"window",
  useStateClassSkin: true,
  autoBlur: false,
  smoothPlayBar:true,
  keyEnabled:true,
  remainingDuration:true,
  toggleDuration:true
});
});
