/* progress bar */
window.onscroll = function() {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/* video loop */
var video = document.getElementById("loop-video");
video.addEventListener("canplay", function() {
  setTimeout(function() {
      video.play();
  }, 5000);
});