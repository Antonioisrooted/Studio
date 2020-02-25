$(document).ready(function() {
    $("#clickable1").click(function(){
    $("#clickable1").hide();
    $("#one").toggle();
    $("#one").show();
    })

    $("#one").click(function(){
    $("#one").hide();
    $("#clickable1").toggle();
    $("#clickable1").show();
    })
})
$(document).ready(function() {
    $(".clickable2").click(function(){
    $(".clickable2").hide();
    $("#two").toggle();
    $("#two").show();
    })
    
    $("#two").click(function(){
    $("#two").hide();
    $(".clickable2").toggle();
    $(".clickable2").show();
    })
})
$(document).ready(function() {
    $(".clickable3").click(function(){
    $(".clickable3").hide();
    $("#three").toggle();
    $("#three").show();
    })
        
    $("#three").click(function(){
    $("#three").hide();
    $(".clickable3").toggle();
    $(".clickable3").show();
    })
})

function myFunction(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email == "" || message == ""){
      alert ("enter your name, email and a commment")
    }
     else alert( name + " ,we have received your message. Thank you for reaching out to us. ")
  }
$(document).ready(function(){
    $("#work4").mouseover(function(){
        $(".work4").fadeIn("slow");
        $(".work4").show();
    }).mouseout(function(){
      $(".work4").hide();
    });
});
$(document).ready(function(){
    $("#work3").mouseover(function(){
        $(".work3").fadeIn("slow");
        $(".work3").show();
    }).mouseout(function(){
      $(".work3").hide();
    });
});
$(document).ready(function(){
    $("#work2").mouseover(function(){
        $(".work2").fadeIn("slow");
        $(".work2").show();
    }).mouseout(function(){
      $(".work2").hide();
    });
});
$(document).ready(function(){
    $("#work1").mouseover(function(){
        $(".work1").fadeIn("slow");
        $(".work1").show();
    }).mouseout(function(){
      $(".work1").hide();
    });
});
$(document).ready(function(){
    $("#work5").mouseover(function(){
        $(".work5").fadeIn("slow");
        $(".work5").show();
    }).mouseout(function(){
      $(".work5").hide();
    });
});
$(document).ready(function(){
    $("#work6").mouseover(function(){
        $(".work6").fadeIn("slow");
        $(".work6").show();
    }).mouseout(function(){
      $(".work6").hide();
    });
});
$(document).ready(function(){
    $("#work7").mouseover(function(){
        $(".work7").fadeIn("slow");
        $(".work7").show();
    }).mouseout(function(){
      $(".work7").hide();
    });
});
$(document).ready(function(){
    $("#work8").mouseover(function(){
        $(".work8").fadeIn("slow");
        $(".work8").show();
    }).mouseout(function(){
      $(".work8").hide();
    });
});