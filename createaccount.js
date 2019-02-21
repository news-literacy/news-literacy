var content = [false,false,false,false]
var white = true;
var clicked = true;
/*var default = true;*/
var myfeed = false;
var d0 = true;
var d1 = false;

function changeColor(thing){
  if(white){
    document.getElementById(thing).style.backgroundColor = "#ee3366";
    white = false;
  }
  else{
    document.getElementById(thing).style.backgroundColor = "white";
    white = true;
  }

  if(document.getElementById(thing) == curate && clicked){
    document.getElementById(thing).style.color = "black";
    clicked = false;
  }
  else{
    document.getElementById(thing).style.color = "#ee3366";
    clicked = true;
  }
}

$("#d0").click(function(){
  document.getElementById('d0').style.backgroundColor = "#ee3366";
  document.getElementById('d1').style.backgroundColor = "white";
  d0 = true;
});
$("#d1").click(function(){
  document.getElementById('d1').style.backgroundColor = "#ee3366";
  document.getElementById('d0').style.backgroundColor = "white";
  d1 = true;
});
/*
function changeColorD(thing){
  if(white $$ default){
    document.getElementById('d0').style.backgroundColor = "#ee3366";
    document.getElementById('d1').style.backgroundColor = "#ee3366";
    white = false;
    default = false;
    myfeed = true;
  }
  else{
    document.getElementById(thing).style.backgroundColor = "white";
    white = true;
  }

  if(document.getElementById(thing) == curate && clicked){
    document.getElementById(thing).style.color = "black";
    clicked = false;
  }
  else{
    document.getElementById(thing).style.color = "#ee3366";
    clicked = true;
  }
}
*/
$(window).on('load',function(){
  console.log(document.URL);
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

$("#next").click(function(){
  if(d0 == true){
    window.location.href = "default.html";
  }
  else if(d1 == true){
    window.location.href = "myFeed.html";
  }
});
/*
function moveTab(thing){
  if(thing == "tocontent"){
    document.getElementById('content').style.borderBottom = "2px solid black";
    document.getElementById('sources').style.borderBottom = "none";
    document.getElementById('display').style.borderBottom = "none";
  }
  if(thing == "tosources"){
    document.getElementById('content').style.borderBottom = "none";
    document.getElementById('sources').style.borderBottom = "2px solid black";
    document.getElementById('display').style.borderBottom = "none";
  }
  if(thing == "todisplay"){
    document.getElementById('content').style.borderBottom = "none";
    document.getElementById('sources').style.borderBottom = "none";
    document.getElementById('display').style.borderBottom = "2px solid black";
  }
}
*/
