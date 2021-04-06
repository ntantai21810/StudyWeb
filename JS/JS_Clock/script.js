let clock = document.getElementById("clock");
let catImage = document.getElementById("lolcatImage");
let allCatImages = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=727&q=80",
  "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=259&q=80",
  "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=363&q=80",
];
let i = 0;

function updateTime() {
  currentTime = new Date();
  hours = currentTime.getHours();
  minutes = currentTime.getMinutes();
  seconds = currentTime.getSeconds();
  stringTime = hours + ":" + minutes + ":" + seconds;
  if (seconds % 5 == 0) {
    catImage.src = allCatImages[i++];
    if (i > 2) {
      i = 0;
    }
  }
  clock.innerText = stringTime;
}

updateTimeId = setInterval(updateTime, 1000);
