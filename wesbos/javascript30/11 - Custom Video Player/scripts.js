const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]"); // anything that has data-skip attr
const ranges = player.querySelectorAll(".player__slider");
const fullscreen = player.querySelector(".fullscreen");

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  // this.dataset provides read/write access to custom data-* attributes.
  if (this.dataset.skip) {
    video.currentTime += parseFloat(this.dataset.skip);
  }
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progress}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleFullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));

skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);
let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e)); //checks if mousedown is true, and then moves to scrub
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

fullscreen.addEventListener("click", handleFullScreen);
