// * on scroll fixed header

window.onscroll = function() {myFunction()};

var header = document.getElementById('CONVERSATION_HEAD_FIX')
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky + 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}