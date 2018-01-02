import { setTimeout } from "timers";

var images = [];
var time = 5000;
var i = 0; //Start point

images[0] = "images/showcase.jpg";
images[1] = "images/showcase1.jpg";
images[2] = "images/showcase2.jpg";
images[3] = "images/showcase3.jpg";

// change images
function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
