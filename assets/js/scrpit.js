

var toggle = document.querySelector(".toggle");
var showcase = document.querySelector(".showcase");

var contactVid = document.getElementById("myContactVideo")

var Btn1 = document.getElementById("accordionBtn1")
var collapseOne = document.getElementById("collapseOne")

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

// Contact Video
function slowVideo() {
  contactVid.playbackRate = .5
}

// About Page
// function accordionOpen(){
//   if (collapseOne.classList.value == "accordion-collapse collapse") {
//     // console.log("GAY")
//     collapseOne.classList.remove("collapse")
//     collapseOne.classList.add("show")
//   } else {
//     console.log("hey")
//     collapseOne.classList.remove("show")
//     collapseOne.classList.add("collapse")
//   }

// }

// Btn1.addEventListener('click', accordionOpen)
window.onload = slowVideo
document.querySelector(".toggle").addEventListener("click", openMenu);