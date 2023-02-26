// document.ready
$(function(){

// starting point (index) of the text I want to type on the screen
let i = 0;
// text to be typed out
const text = "Software Engineer";
// The speed/duration of the effect in milliseconds
const speed = 80;

// function to create typewriter effect
function typeWriter() {
  if (i < text.length) {
    document.getElementById("job-title").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// run typewriter
typeWriter();

// sidenav bar function
$('.sidenav').sidenav();

// carousel function
$('.carousel').carousel();

// modal function
$('.modal').modal();

// floating button
$('.fixed-action-btn').floatingActionButton();

// function to display button hint
$('.tooltipped').tooltip();

// collapsible content
$('.collapsible').collapsible();


});


