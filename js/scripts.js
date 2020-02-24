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