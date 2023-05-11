

var toggle = document.querySelector(".toggle");
var showcase = document.querySelector(".showcase");

var contactVid = document.getElementById("myContactVideo")

function openMenu() {
  console.log(toggle.classList);
  if (toggle.classList.value == "toggle active") {
    // console.log("GAY")
    toggle.classList.remove("active");
    showcase.classList.remove("active");
  } else {
    // console.log("hey")
    toggle.classList.add("active");
    showcase.classList.add("active");
  }
}

function slowVideo() {
  // console.log("HEY g÷hg Contact")
  contactVid.playbackRate = .5
}
window.onload = slowVideo
document.querySelector(".toggle").addEventListener("click", openMenu);