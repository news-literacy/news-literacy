var content = [false, false, false, false];
var cont = ["economy", "policy", "elections", "trending"];
var sources = [false,false,false,false,false,false,false,false,false,false];
var sces = ["abc", "ap", "cnn", "fox", "npr", "nyt", "pol", "reu", "wp", "wsj"];
var white = true;
var myfeed = false;
var d0 = true;
var d1 = false;

$(window).on('load',function(){
  var url = document.URL;
  if(url.includes('content'))
  {
    document.getElementById("content").style.borderBottom = "2px solid black";
  }
  else if(url.includes('sources')){
    document.getElementById("sources").style.borderBottom = "2px solid black";
  }
  else if(url.includes('display')){
    document.getElementById("display").style.borderBottom = "2px solid black";
  }
});

$("#d0").click(function(){
  document.getElementById('d0').style.backgroundColor = "#ee3366";
  document.getElementById('d1').style.backgroundColor = "white";
  d0 = true;
  d1 = false;
});
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

ct = false;
$(document).ready(function(){  //change content colors, bool, local store
  if(document.URL.includes('content')){
    window.localStorage.clear();
    $("#c0").click(function(){
      if(document.getElementById("c0").style.backgroundColor == "white"){
           $("#c0").css("background-color", "#ee3366");
           ct = true;
         }
     else {
           $("#c0").css('background-color', 'white');
           ct = false;
     }
      window.localStorage.setItem("c0", ct);
    });
    $("#c1").click(function(){
      if(document.getElementById("c1").style.backgroundColor=='white'){
           $("#c1").css('background-color', '#ee3366');
           ct = true;
         }
     else {
           $("#c1").css('background-color', 'white');
           ct = false;
     }
      window.localStorage.setItem("c1", ct);
    });
    $("#c2").click(function(){
      if(document.getElementById("c2").style.backgroundColor=='white'){
           $("#c2").css('background-color', '#ee3366');
           ct = true;
         }
     else {
           $("#c2").css('background-color', 'white');
           ct = false;
     }
      window.localStorage.setItem("c2", ct);
    });
    $("#c3").click(function(){
      if(document.getElementById("c3").style.backgroundColor=='white'){
           $("#c3").css('background-color', '#ee3366');
           ct = true;
         }
     else {
           $("#c3").css('background-color', 'white');
           ct = false;
     }
      window.localStorage.setItem("c3", ct);
    });
  }
});

st = false;
$(document).ready(function(){  //change content colors, bool, local store
  if(document.URL.includes('sources')){
    $("#s0").click(function(){
      if(document.getElementById("s0").style.backgroundColor == "white"){
           $("#s0").css("background-color", "#ee3366");
           st = true;
         }
     else {
           $("#s0").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s0", st);
    });
    $("#s1").click(function(){
      if(document.getElementById("s1").style.backgroundColor=='white'){
           $("#s1").css('background-color', '#ee3366');
           st = true;
         }
     else {
           $("#s1").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s1", st);
    });
    $("#s2").click(function(){
      if(document.getElementById("s2").style.backgroundColor=='white'){
           $("#s2").css('background-color', '#ee3366');
           st = true;
         }
     else {
           $("#s2").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s2", st);
    });
    $("#s3").click(function(){
      if(document.getElementById("s3").style.backgroundColor=='white'){
           $("#s3").css('background-color', '#ee3366');
           st = true;
         }
     else {
           $("#s3").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s3", st);
    });
    $("#s4").click(function(){
      if(document.getElementById("s4").style.backgroundColor=='white'){
           $("#s4").css('background-color', '#ee3366');
           st = true;
         }
     else {
           $("#s4").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s4", st);
    });
    $("#s5").click(function(){
      if(document.getElementById("s5").style.backgroundColor=='white'){
           $("#s5").css('background-color', '#ee3366');
           st = true;
         }
     else {
           $("#s5").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s5", st);
    });
    $("#s6").click(function(){
      if(document.getElementById("s6").style.backgroundColor=='white'){
           $("#s6").css('background-color', '#ee3366');
           st = true;
         }
     else {
           $("#s6").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s6", st);
    });
    $("#s7").click(function(){
      if(document.getElementById("s7").style.backgroundColor=='white'){
           $("#s7").css('background-color', '#ee3366');
           st = true;
         }
     else {
           $("#s7").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s7", st);
    });
    $("#s8").click(function(){
      if(document.getElementById("s8").style.backgroundColor=='white'){
           $("#s8").css('background-color', '#ee3366');
           st = true;
         }
     else {
           $("#s8").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s8", st);
    });
    $("#s9").click(function(){
      if(document.getElementById("s9").style.backgroundColor=='white'){
           $("#s9").css('background-color', '#ee3366');
           st = true;
         }
     else {
           $("#s9").css('background-color', 'white');
           st = false;
     }
      window.localStorage.setItem("s9", st);
    });
  }
});

var cnow = [];
var snow = [];
$(document).ready(function(){
  for (var i = 0; i < 4; i++){
    cnow[i] = window.localStorage.getItem('c'+i);
    console.log("c " + cnow[i]);
    if (!cnow[i]){
      $("." + cont[i]).hide();
    }
  }

  for (var j = 0; j < 10; j++){
    snow[j] = window.localStorage.getItem('s' + j);
    console.log("s " + snow[j])
    if (!snow[j]){
      $("." + sces[j]).hide();
    }
  }
});
