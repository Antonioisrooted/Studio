$(documents).ready(function(){
    $("#clickable1").click(function(){
        $("#one").toggle();
    })
})




function myFunction(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email == "" || message == ""){
      alert ("enter your name, email and a commment")
    }
     else alert( name + " we have received your message. Thank you for reaching out to us. ")
  }