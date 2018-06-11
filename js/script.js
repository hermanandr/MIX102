/* Globale variabler */
var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;

var title = document.getElementById('title');
var titleHeight = document.getElementById('title').style.top;
var section1 = document.getElementById('sec1');

// update position of square 1 and square 2 when scroll event fires.
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



/*
    when element is visible {
        move element = scrollPercent*window.innerHeight + 'px' - parentScrollPos;
    }

*/

/* var scrollEventHandler = function() {
	if(isScrolledIntoView(document.getElementById('text'))) {
        document.getElementById('text').style.color = "blue";
  } else {
    document.getElementById('text').style.color = "red";
  }
}


function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    isVisible = elemTop < window.innerHeight && elemBottom >= 0;

    return isVisible;
} */

/* Sjekker om elementet er synlig */
/* function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
} */
