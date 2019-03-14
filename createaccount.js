var content = [0,0,0,0];
var cont = ["economy", "policy", "elections", "trending"];
var sources = [true,true,true,true,true,true,true,true,true,true];
var sces = ["abc", "ap", "cnn", "fox", "npr", "nyt", "pol", "reu", "wp", "wsj"];
var white = true;
var myfeed = false;
var d0 = true;
var d1 = false;
var cur = true;
var allCon = false;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("drop").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//filtering on news article pages
var cnow = [];
var snow = [];
$(document).ready(function(){
  for (var i = 0; i < 4; i++){
    cnow[i] = window.localStorage.getItem('c'+i);
    console.log("c " + cnow[i]);
    if (cnow[i] != 1){
      $("." + cont[i]).hide();
    }
  }

  for (var j = 0; j < 10; j++){
    snow[j] = window.localStorage.getItem('s' + j);
    console.log("s " + snow[j])
    if (snow[j] != 'true'){
      $("." + sces[j]).hide();
    }
  }
});

$("#d0").click(function(){
  document.getElementById('d0').style.backgroundColor = "#ee3366";
  document.getElementById('d1').style.backgroundColor = "white";
  d0 = true;
  d1 = false;});
$("#d1").click(function(){
  document.getElementById('d1').style.backgroundColor = "#ee3366";
  document.getElementById('d0').style.backgroundColor = "white";
  d1 = true;
  d0 = false;
});

$("#next").click(function(){
  if(d0 == true){
    window.location.href = "default.html";
  }
  else if(d1 == true){
    window.location.href = "myFeed.html";
  }
});

//change content colors, bool, local store
$(document).ready(function(){
  if(document.URL.includes('content')){
    fillContent(); //set all content to true/false
    checkContent();
    console.log(allCon);
    $("#c0").click(function(){
      if(content[0] == 0){
           $("#c0").css("background-color", "#ee3366");
           content[0] = 1;
           window.localStorage.setItem("c0", 1);
           if (allCon == true){
             sContent(0);
           }
         }
     else{
           $("#c0").css('background-color', 'white');
           content[0] = 0;
           window.localStorage.setItem("c0", 0);
         }
    });
    $("#c1").click(function(){
      if(content[1] == 0){
           $("#c1").css('background-color', '#ee3366');
           content[1] = 1;
           window.localStorage.setItem("c1", 1);
           if (allCon == true){
             sContent(1);
           }
         }
     else{
           $("#c1").css('background-color', 'white');
           content[1] = 0;
           window.localStorage.setItem("c1", 0);
     }
    });
    $("#c2").click(function(){
      if(content[2] == 0){
           $("#c2").css('background-color', '#ee3366');
           content[2] = 1;
           window.localStorage.setItem("c2", 1);
           if (allCon == true){
             sContent(2);
           }
         }
     else {
           $("#c2").css('background-color', 'white');
           content[2] = 0;
           window.localStorage.setItem("c2", 0);
     }
    });
    $("#c3").click(function(){
      if(content[3] == 0){
           $("#c3").css('background-color', '#ee3366');
           content[3] = 1;
           window.localStorage.setItem("c3", 1);
           if (allCon == true){
             sContent(3);
           }
         }
     else {
           $("#c3").css('background-color', 'white');
           content[3] = 0;
           window.localStorage.setItem("c3", 0);
     }
    });
    $("#tosources").click(checkContent());
  }
});

var cc;
function fillContent(){
  for (var i = 0; i < 4; i++){
    cc = window.localStorage.getItem('c'+i);
    if (cc == 1){
      $("#c" + i).css('background-color', '#ee3366');
      content[i] = 1;
    }
    else{
      content[i] = 0;
    }
  }
}

function sContent(num){
  for (var i = 0; i < 4; i++){
    if (i != num)
      window.localStorage.setItem("c"+i, 0);
  }
  allCon = false;
}
function checkContent(){
  if (cnow[0] != 1 && cnow[1] != 1 && cnow[2] != 1 && cnow[3] != 1){
    for (var i = 0; i < 4; i++){
      window.localStorage.setItem('c'+i, 1);
    }
    allCon = true;
  }
}

//change sources colors, bool, local store
var st = true;
$(document).ready(function(){
  if(document.URL.includes('sources')){
    checkContent();
    fillSources();
    checkSources();
    console.log("curated? " + cur);
    if (cur == true){
      curateSources();
    }
    $("#s0").click(function(){
      if(document.getElementById('s0').style.backgroundColor == 'white'){
           $("#s0").css("background-color", "#ee3366");
           $('#curate').css({'background-color':'white', 'color': '#ee3366'});
           st = true;
           if(cur == true){
             deCurate(0);
           }
         }
     else {
           $("#s0").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s0", st);
    });
    $("#s1").click(function(){
      if(document.getElementById('s1').style.backgroundColor == 'white'){
           $("#s1").css('background-color', '#ee3366');
           $('#curate').css({'background-color':'white', 'color': '#ee3366'});
           st = true;
           if(cur == true){
             deCurate(1);
           }
         }
     else {
           $("#s1").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s1", st);
    });
    $("#s2").click(function(){
      if(document.getElementById('s2').style.backgroundColor == 'white'){
           $("#s2").css('background-color', '#ee3366');
           $('#curate').css({'background-color':'white', 'color': '#ee3366'});
           st = true;
           if(cur == true){
             deCurate(2);
           }
         }
     else {
           $("#s2").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s2", st);
    });
    $("#s3").click(function(){
      if(document.getElementById('s3').style.backgroundColor == 'white'){
           $("#s3").css('background-color', '#ee3366');
           $('#curate').css({'background-color':'white', 'color': '#ee3366'});
           st = true;
           if(cur == true){
             deCurate(3);
           }
         }
     else {
           $("#s3").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s3", st);
    });
    $("#s4").click(function(){
      if(document.getElementById('s4').style.backgroundColor == 'white'){
           $("#s4").css('background-color', '#ee3366');
           $('#curate').css({'background-color':'white', 'color': '#ee3366'});
           st = true;
           if(cur == true){
             deCurate(4);
           }
         }
     else {
           $("#s4").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s4", st);
    });
    $("#s5").click(function(){
      if(document.getElementById('s5').style.backgroundColor == 'white'){
           $("#s5").css('background-color', '#ee3366');
           $('#curate').css({'background-color':'white', 'color': '#ee3366'});
           st = true;
           if(cur == true){
             deCurate(5);
           }
         }
     else {
           $("#s5").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s5", st);
    });
    $("#s6").click(function(){
      if(document.getElementById('s6').style.backgroundColor == 'white'){
           $("#s6").css('background-color', '#ee3366');
           $('#curate').css({'background-color':'white', 'color': '#ee3366'});
           st = true;
           if(cur == true){
             deCurate(6);
           }
         }
     else {
           $("#s6").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s6", st);
    });
    $("#s7").click(function(){
      if(document.getElementById('s7').style.backgroundColor == 'white'){
           $("#s7").css('background-color', '#ee3366');
           $('#curate').css({'background-color':'white', 'color': '#ee3366'});
           st = true;
           if(cur == true){
             deCurate(7);
           }
         }
     else {
           $("#s7").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s7", st);
    });
    $("#s8").click(function(){
      if(document.getElementById('s8').style.backgroundColor == 'white'){
           $("#s8").css('background-color', '#ee3366');
           $('#curate').css({'background-color':'white', 'color': '#ee3366'});
           st = true;
           if(cur == true){
             deCurate(8);
           }
         }
     else {
           $("#s8").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s8", st);
    });
    $("#s9").click(function(){
      if(document.getElementById('s9').style.backgroundColor == 'white'){
           $("#s9").css('background-color', '#ee3366');
           $('#curate').css({'background-color':'white', 'color': '#ee3366'});
           st = true;
           if(cur == true){
             deCurate(9);
           }
         }
     else {
           $("#s9").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s9", st);
    });
    $("#curate").click(function(){
      if(document.getElementById("curate").style.backgroundColor == 'white'){
        $("#curate").css({'background-color':"#ee3366", 'color':'white'});
        curateSources();
      }
    });
  }
});

//fetch data from local to populate choices
var scount = 0;
function fillSources(){
  for (var i = 0; i < 10; i++){
    var ss = window.localStorage.getItem('s'+i);
    if (ss == 'true' || ss == true){
      $("#s" + i).css('background-color', '#ee3366');
      $('#curate').css({'background-color':'white', 'color': '#ee3366'});
      scount++;
    }
    else {
      $("#s" + i).css('background-color', 'white');
  }
  if (scount == 10){
    curateSources();
  }
}}

//see if any of the sources are selected
function checkSources(){
  for (var i = 0; i < 10; i++){
    if (window.localStorage.getItem("s"+i) == 'false'){
      cur = false;
    }
  }
}

//"let us curate" button has been selected
function curateSources(){
  for (var i = 0; i < 10; i++){
    $("#s" + i).css('background-color', 'white');
    window.localStorage.setItem("s" + i, true);
    $("#curate").css({'background-color':"#ee3366", 'color':'white'});
  }
  cur = true;
}

//go from all to one source
function deCurate(num){
  $("#curate").css({'background-color':'white', 'color': '#ee3366'});
  for (var i = 0; i < 10; i++){
    if (i != num)
      window.localStorage.setItem("s" + i, false);
  }
  cur = false;
}


//fill in person's added username
$(document).ready(function(){
  console.log(window.localStorage.getItem("username"));
  $(".dropbtn").html(window.localStorage.getItem("username"));
});

//keep colors on bookmarks
$(document).ready(function(){
  for (var i = 1; i <= 66; i++){
    if(window.localStorage.getItem(i) == 1){
      $('#'+i).find(".bm").css('backgroundColor', '#ee3366');
      $('#'+i).find(".bm").val(1);
    }
  }
});

//change bookmark color and add save class on click
$(document).ready(function(){
  $(".bm").click(function(){
    if($(this).val() == 1){
      $(this).css("backgroundColor", "white");
      $(this).val(0);
      window.localStorage.setItem($(this).parent().attr('id'), 0);
    }
    else{
      $(this).css("backgroundColor","#ee3366" );
      $(this).val(1);
      window.localStorage.setItem($(this).parent().attr('id'), 1);
    }
  })
});

//populate saved articles
$(document).ready(function(){
  if(document.URL.includes('saved')){
    for (var i = 1; i <= 66; i++){
      console.log(i + " " + window.localStorage.getItem(i));
      if (window.localStorage.getItem(i) != 1){
        $('#'+i).hide();
      }
      else{
        $('#'+i).show();
      }
    }
  }
});
