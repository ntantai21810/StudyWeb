let worksList = document.querySelector(".works-list");
let addBtn = document.querySelector(".input-icon");
let inputWork = document.querySelector(".input-work");
let timeTitle = document.getElementById("time");
let deleteAll = document.querySelector("header i");

let allWorks = [];

getDataFromLocalStorage();

addBtn.addEventListener("click", () => {
  let work = inputWork.value;
  if (work) {
    allWorks.push(work);
    inputWork.value = "";
    localStorage.setItem("data", allWorks.toString());
    render();
  }
});

deleteAll.addEventListener("click", () => {
  allWorks = [];
  localStorage.setItem("data", allWorks.toString());
  render();
});

let timeUpdateId = setInterval(updateTime, 1000);

function render() {
  let works = allWorks.map(
    (item) => `
  <li class="works-item">
  <div
    class="add-work"
    onclick="this.parentElement.classList.toggle('done')"
  >
    <i class="far fa-circle none-checked"></i>
    <i class="fas fa-check-circle checked"></i>
    <span>${item}</span>
  </div>
  <div class="remove-work" onclick="this.parentElement.remove()">
    <i class="fas fa-trash-alt"></i>
  </div>
</li>
  `
  );
  worksList.innerHTML = works.join("\n");
}

function updateTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let day = currentTime.getDate();
  let month = currentTime.getMonth();
  let year = currentTime.getFullYear();
  let timeString = `${hours}:${minutes}:${seconds}  ${day}-${
    month + 1
  }-${year}`;
  timeTitle.innerText = timeString;
}

function getDataFromLocalStorage() {
  let allData = localStorage.getItem("data");
  if (allData) {
    allWorks = allData.split(",");
  } else {
    allWorks = [];
  }
  render();
}
