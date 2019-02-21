var content = [false,false,false,false]
var white = true;

function changeColor(thing){
  if(white){
    document.getElementById(thing).style.backgroundColor = "#ee3366";
    white = false;
  }
  else{
    document.getElementById(thing).style.backgroundColor = "white";
    white = true;
  }

  if(document.getElementById(thing) == "curate"){
    document.getElementById(thing).style.color = "black";
  }
}

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
