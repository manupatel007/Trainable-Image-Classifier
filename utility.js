var cnt=1;
    function Createbtn() {
        
    cnt++;
        // NOW CREATE AN INPUT BOX TYPE BUTTON USING createElement() METHOD.
        var button = document.createElement('input');

        // SET INPUT ATTRIBUTE 'type' AND 'value'.
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Class '+cnt);
  button.setAttribute('id', cnt);
        // ADD THE BUTTON's 'onclick' EVENT.
        button.setAttribute('onclick', 'handleButton(this)');
  
  var elementAbove = document.getElementById("yes");

  var line = document.createElement('div');
  line.setAttribute('id', String(cnt)+String(cnt));
  var elementAbovee = document.getElementById("update");
  // FINALLY ADD THE NEWLY CREATED TABLE AND BUTTON TO THE BODY.
        elementAbove.appendChild(button);
  elementAbovee.appendChild(line);
        setthing();
    }
  function setthing(){
  var div = document.getElementById(String(cnt)+String(cnt));
  div.innerHTML = div.innerHTML.replace('','Class '+cnt+' Samples:');
}

function crtlnk(){
      var link = document.createElement('a');
      link.setAttribute("href","#slide-"+cnt);
      body = document.getElementById("x");
      link.textContent=cnt;
      body.appendChild(link);
    }
function crtdiv(){
  var dive = document.createElement('div');
  dive.setAttribute("id","slide-"+cnt);
  aj=document.getElementById("z");
  aj.appendChild(dive);
}
function crtvid(){
  var dive = document.createElement('div');
  dive.setAttribute("id",cnt+"a");
  aj=document.getElementById("slide-"+cnt);
  aj.appendChild(dive);
  var vid = document.createElement('video');
  vid.setAttribute("class","my_class_name");
  vid.setAttribute("autoplay",String.Empty);
  vid.setAttribute("playsinline",String.Empty);
  vid.setAttribute("muted",String.Empty);
  vid.setAttribute("id",cnt+"cc");
  vid.setAttribute("width","224");
  vid.setAttribute("height","224");
  aj=document.getElementById(cnt+"a");
  aj.appendChild(vid);
}
function crtbr(){
  var br = document.createElement('br');
  aj=document.getElementById("slide-"+cnt);
  aj.appendChild(br);
}
function crtdvstl(){
  var dive = document.createElement('div');
  dive.style.display="block";
  dive.setAttribute("id",cnt+"b");
  aj=document.getElementById("slide-"+cnt);
  aj.appendChild(dive);
}
function crtbtn1(){
  var btn = document.createElement('button');
  btn.setAttribute("class","button");
  btn.setAttribute("id",cnt);
  btn.setAttribute("onclick","handleButton(this)");
  btn.textContent="Class "+cnt;
  aj=document.getElementById(cnt+"b");
  aj.appendChild(btn);
}

function crtbr1(){
  var br = document.createElement('br');
  aj=document.getElementById(cnt+"b");
  aj.appendChild(br);
}
function para(){
  var para = document.createElement('p');
  para.setAttribute("id",String(cnt)+String(cnt));
  para.textContent="Class "+cnt+" count: ";
  aj=document.getElementById(cnt+"b");
  aj.appendChild(para);
}
function crtbr2(){
  var br = document.createElement('br');
  aj=document.getElementById(cnt+"b");
  aj.appendChild(br);
}
function crtbtn2(){
  var btn = document.createElement('button');
  btn.setAttribute("class","button");
  btn.setAttribute("id",cnt+"t");
  btn.setAttribute("onclick","stpcm(this)");
  btn.textContent="Stop cam";
  aj=document.getElementById(cnt+"b");
  aj.appendChild(btn);
  var br = document.createElement('br');
  aj=document.getElementById(cnt+"b");
  aj.appendChild(br);
  var btn = document.createElement('button');
  btn.setAttribute("class","button");
  btn.setAttribute("id",cnt+"c");
  btn.setAttribute("onclick","strcm(this)");
  btn.textContent="Start cam";
  aj.appendChild(btn);
}

function crtcard(){
  cnt++;
  crtlnk();
  crtdiv();
  crtvid();
  crtbr();
  crtdvstl();
  crtbtn1();
  crtbr1();
  para();
  //crtbr2();
  crtbtn2();
}
function stpcm(elem){
  var video = document.getElementById("wc");

// A video's MediaStream object is available through its srcObject attribute
var mediaStream = video.srcObject;

// Through the MediaStream, you can get the MediaStreamTracks with getTracks():
var tracks = mediaStream.getTracks();

// Tracks are returned as an array, so if you know you only have one, you can stop it with: 
tracks.forEach(track => track.stop())
document.getElementById("wc").id=(elem.id).charAt(0)+"cc";
}
function strcm(elem)
{
  document.getElementById(elem.id+"c").id="wc";
  init();
}

function startPredicting1(elem){
  document.getElementById(elem.id+"c").id="wc";
  init1();
  startPredicting();
}

function stopPredicting1(elem){
  stopPredicting();
  stpcm(elem);
}