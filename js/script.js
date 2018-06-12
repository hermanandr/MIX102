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

    title.style.top = 400 - scrollPercent*window.innerHeight/10 + 'px';
});

// faktaboks

$(document).ready(function(){
  var title = $("#faktaboks").text();
  $("#faktaboks").click(function(){
      $("#fakta").slideToggle();
      if($("#faktaboks").text() == title){
        $("#faktaboks").text("Mindre om ID-merking");
      } else {
        $("#faktaboks").text(title);
      };
  });
});

// $(document).ready(function(){
//   var title = $("#svarboks").text();
//   $("#svarbokser").click(function(){
//       $("#svar").slideToggle();
//       if($("#svarbokser").text() == title){
//         $("#svarbokser").text("JA");
//       } else {
//         $("#svarbokser").text(title);
//       };
//   });
// });

function showContent(buttonId){
    var answer = document.getElementById("answer");
    var correctButton = document.getElementById("button3");

    answer.style.display = "block";
    document.getElementById("button1").style.backgroundColor = "#dedede";
    document.getElementById("button2").style.backgroundColor = "#dedede";
    correctButton.style.backgroundColor = "#7dd888";  

    if(buttonId == "button3"){
        document.getElementById("feedback").innerHTML = "Riktig!";
    } else {
        document.getElementById("feedback").innerHTML = "Ikke helt riktig"
    }
    
}
