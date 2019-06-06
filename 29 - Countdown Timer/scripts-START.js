const form = document.querySelector("form");
const input = document.querySelector("input[name='minutes']");
const countdown = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const timeKey = document.querySelectorAll(".timer__button");

let time = 0;
let interval;
form.addEventListener("submit", function(e) {
  clearInterval(interval);
  e.preventDefault();
  time = Number(input.value) * 60;
  start(time);
});

timeKey.forEach(key => {
  key.addEventListener("click", function() {
    clearInterval(interval);
    time = this.dataset.time;
    start(time);
  });
});

function start(time) {
  let now = new Date();
  let hourTime = Math.floor(now.getHours());
  let minTime = Math.floor(now.getMinutes()) + Math.floor(time / 60);
  if (minTime >= 60) {
    hourTime++;
    minTime = Math.floor(now.getMinutes()) + Math.floor(time % 60);
  }
  if (minTime < 10) minTime = "0" + minTime;
  let end = `${hourTime}:${minTime}`;
  let secTime = time % 60;
  if (secTime < 10) secTime = "0" + secTime;
  if (time < 60) secTime = time;

  countdown.textContent = `${Math.floor(time / 60)}:${secTime}`;
  endTime.textContent = `Be Back At ${end}`;

  interval = setInterval(setCounter, 1000);

  function setCounter() {
    if (time === 1) {
      console.log("end");
      clearInterval(interval);
    }
    time--;
    let minutes = Math.floor(time / 60);
    let sec = time % 60;
    if (sec < 10) sec = "0" + sec;
    countdown.textContent = `${minutes}:${sec}`;
  }
}
