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
});
