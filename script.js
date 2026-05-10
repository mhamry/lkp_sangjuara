// function runTrack(selector, direction, time) {
//   const track = document.querySelector(selector);
//   track.innerHTML += track.innerHTML;
//   const originalWidth = track.scrollWidth / 2;
//   track.style.setProperty("--move", `-${originalWidth}px`);
//   track.style.animation = `run-${direction} ${originalWidth} ${time}s linear infinite`;
// }

// window.onload = () => {
//   runTrack(".track-right", "right", 20);
//   runTrack(".track-left", "left", 50);
// };

function runTrack(selector, direction, time) {
  const track = document.querySelector(selector);

  track.innerHTML += track.innerHTML;

  const originalWidth = track.scrollWidth / 2;

  track.style.setProperty("--move", `-${originalWidth}px`);

  track.style.animation = `run-${direction} ${time}s linear infinite`;
}

window.onload = () => {
  runTrack(".track-right", "right", 60);
  //   runTrack(".track-left", "left", 50);
};
