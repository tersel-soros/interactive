var images = [
  "assets/weather_1.jpg",
  "assets/weather_2.jpg",
  "assets/weather_3.jpg",
  "assets/weather_4.jpg",
  "assets/weather_5.jpg",
  "assets/weather_6.jpg",
  "assets/weather_7.jpg",
  "assets/weather_8.jpg",
  "assets/weather_9.jpg",
  "assets/weather_10.jpg",
  "assets/weather_11.jpg"
];

var image;
var random;
var image_src;
var new_image;

window.onclick = function() {
  random = Math.floor(Math.random() * images.length);
  image_src = chrome.extension.getURL(images[random]);
  new_image = document.createElement("img");
  new_image.classList.add("weather");
  new_image.setAttribute("src", image_src);
  document.body.appendChild(new_image);
  console.log(image);
}

window.onscroll = function() {
  var weather = document.querySelectorAll(".weather");
  for (i = 0; i < weather.length; i++) {
    weather[i].style.display = "none";
  }
}