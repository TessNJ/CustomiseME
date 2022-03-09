document.querySelector(".menu").addEventListener("click", burgerMenu);
//Toggle between showing and hiding the burger menu
function burgerMenu() {
  var x = document.querySelector("header nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
