/*
var login = document.getElementById('signIn');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}
*/

$(document).ready(function(){
  $("#create").click(function(){
    window.localStorage.clear();
  })
});
//enter and exit the sign-in pop-up window
$(document).ready(function() {
    $("#sign-in").click(function(){
       $(".shadow").show();
    });

    $(".shadow").click(function(e){
      if (e.target.className === "shadow"){
        $(".shadow").hide();
      }
    })

    $(".close-sign-in").click(function(){
        $(".shadow").hide();
    });

    $("#create").click(function(){
       $(".shadow1").show();
    });

    $(".shadow1").click(function(f){
      if (f.target.className === "shadow1"){
        $(".shadow1").hide();
      }
    })

    $(".close-sign-in2").click(function(){
        $(".shadow1").hide();
    });
});

$(document).ready(function(){
  if(document.URL.includes('home')){
    $("#NEWusername").keyup(function(){
      window.localStorage.setItem("username", this.value);
      console.log(window.localStorage.getItem("username"));
    });
  }
});

$("#submit-sign").click(function(){
  var old = document.getElementById('OLDusername').value;
  if (old != window.localStorage.getItem("username")){
    alert("Username Not Found");
  }
});
