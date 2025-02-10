const video = document.querySelector('.viewer');
const toggle = document.querySelector('.player__button');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const fastForwardButton = document.querySelector('.fastForward');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const speedBar = document.querySelector('.speed-bar');

// Toggle Play/Pause
function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚ ❚';
  } else {
    video.pause();
    toggle.textContent = '►';
  }
}

// Update Volume
function updateVolume() {
  video.volume = volume.value;
}

// Update Playback Speed
function updatePlaybackSpeed() {
  video.playbackRate = playbackSpeed.value;
  speedBar.textContent = `${playbackSpeed.value}×`;
}

// Skip forward or rewind
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Update progress bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Scrub through video
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event Listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
volume.addEventListener('input', updateVolume);
playbackSpeed.addEventListener('input', updatePlaybackSpeed);
rewindButton.addEventListener('click', skip);
fastForwardButton.addEventListener('click', skip);
progress.addEventListener('click', scrub);
