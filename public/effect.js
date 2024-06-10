// Functions for Revealing Element Upwards

function checkForVisibility() {
    var up = document.querySelectorAll(".up");
    up.forEach(function(up) {
      if (isElementInViewport(up)) {
        up.classList.add("upVisible");
      } 
    });

    var rt = document.querySelectorAll(".rt");
    rt.forEach(function(rt) {
      if (isElementInViewport(rt)) {
        rt.classList.add("rtVisible");
      } 
    });
}
  
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
  
if (window.addEventListener) {
    addEventListener("DOMContentLoaded", checkForVisibility, false);
    addEventListener("load", checkForVisibility, false);
    addEventListener("scroll", checkForVisibility, false);
}