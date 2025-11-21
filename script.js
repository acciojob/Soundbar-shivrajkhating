//your JS code here. If required.
// Store currently playing audio
let currentAudio = null;

// Select all buttons
const buttons = document.querySelectorAll("#buttons .btn");
const stopBtn = document.querySelector("#buttons .stop");

// Play sound on button click
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const soundFile = btn.getAttribute("data-sound");
    const audio = new Audio(`sounds/${soundFile}`);
    
    // Stop previous audio if any
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    audio.play();
    currentAudio = audio;
  });
});

// Stop button functionality
stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
});
