

var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;

var title = document.getElementById('title');
var titleHeight = document.getElementById('title').style.top;
/* var square1 = document.getElementById('en');
var square2 = document.getElementById('to'); */

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function() {

    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop/scrollArea || 0;

    title.style.top = 400 - scrollPercent*window.innerHeight/10 + 'px';

    /*
    square1.style.top = scrollPercent*window.innerHeight + 'px';
    square1.style.left = scrollPercent*window.innerWidth + 'px';
    square2.style.left = 800 - scrollPercent*window.innerWidth*0.6 + 'px'; */
});