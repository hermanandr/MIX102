/* Globale variabler */
var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;

var title = document.getElementById('title');
var titleHeight = document.getElementById('title').style.top;

// Scroll-effect for tittel.
window.addEventListener('scroll', function() {

    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop/scrollArea || 0;

    title.style.top = 100 - scrollPercent*window.innerHeight/10 + 'px';
});

// faktaboks
$(document).ready(function(){
  var tekst = $("#faktaboks").text();
  $("#faktaboks").click(function(){
      $("#fakta").slideToggle();
      if($("#faktaboks").text() == tekst){
        $("#faktaboks").text("Mindre om ID-merking");
      } else {
        $("#faktaboks").text(tekst);
      };
  });
});

// Formeringsspørsmål - viser riktig svar og infotekst
function showAnswer(buttonId){
    var answer = document.getElementById("answer");
    var correctButton = document.getElementById("button3");

    answer.style.display = "block";
    var list = document.getElementById("quiz").children;
    console.log(list[3]);
    list[3].style.borderRadius = "10px 10px 0px 0px";

    document.getElementById("button1").style.backgroundColor = "#dedede";
    document.getElementById("button2").style.backgroundColor = "#dedede";
    correctButton.style.backgroundColor = "rgb(0, 226, 139";

    if(buttonId == "button3"){
        document.getElementById("feedback").innerHTML = "Riktig!";
    } else {
        document.getElementById("feedback").innerHTML = "Ikke helt riktig"
    }
}

function buttons(buttonId){
    var clickedButton = document.getElementById(buttonId).id;
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer2 = document.getElementById("answer2");

    if(clickedButton == "button4"){
        answer1.style.display = "block";
        answer2.style.display = "none";
        answer3.style.display = "none";
    } else if(clickedButton == "button5") {
        answer1.style.display = "none";
        answer2.style.display = "block";
        answer3.style.display = "none";
    } else if(clickedButton == "button6"){
        answer1.style.display = "none";
        answer2.style.display = "none";
        answer3.style.display = "block";
    }
}
