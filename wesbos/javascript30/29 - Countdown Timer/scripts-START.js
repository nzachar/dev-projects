let countdown;
const timeDisplay = document.querySelector(".display__time-left");
const endDisplay = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
const form = document.querySelector("#custom");

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  clearInterval(countdown);
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  timeDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const minutes = end.getMinutes();
  endDisplay.textContent = `Be back at ${adjustHour(end.getHours())}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function adjustHour(hour) {
  return hour > 12 ? hour - 12 : hour;
}

function startTimer() {
  const newTime = parseFloat(this.dataset.time);
  timer(newTime);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const userInputMinutes = parseFloat(this.minutes.value) * 60;
  if (userInputMinutes) {
    timer(userInputMinutes);
    this.reset();
  } else {
    timeDisplay.textContent = "Invalid user input";
  }
});
