// SIDENAV
function openNav() {
  document.querySelector(".sidenav").style.width = "250px";
  document.querySelector(".main").style.marginLeft = "250px";
}
function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
  document.querySelector(".main").style.marginLeft = "0";
}

$(document).ready(function() {
  // CUTESY HOVER EFFECTS
  $("body").on("mouseenter touchstart", ".show", function() {
    $(".show").hide.next().fadeIn();
  });
});
