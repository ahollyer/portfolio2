// SIDENAV
function openNav() {
  document.querySelector(".sidenav").style.width = "250px";
  // document.querySelector(".wrapper").style.marginLeft = "250px";
}
function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
  // document.querySelector(".wrapper").style.marginLeft = "0";
}

$(document).ready(function() {
  // CUTESY HOVER EFFECTS
  $("body").on("mouseenter", ".show", function() {
    $(".show").hide().next().fadeIn();
  });
});
