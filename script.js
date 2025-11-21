//your JS code here. If required.
// Array of sound names based on the image
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Get the container element for buttons
const buttonsContainer = document.getElementById('buttons');

// Get the stop button
const stopButton = document.querySelector('.stop'); 
// You can also use document.getElementById('stop-button'); if you use the ID from the HTML

// --- 1. Create the Sound Buttons Dynamically ---
sounds.forEach(sound => {
    // Create a new button element
    const button = document.createElement('button');
    
    // Set the class to 'btn' as required
    button.classList.add('btn');
    
    // Set the text content to the sound name
    button.innerText = sound;
    
    // Add an event listener to play the corresponding sound when clicked
    button.addEventListener('click', () => {
        // Stop any currently playing sound first
        stopSounds();
        
        // Create a new Audio object and play it
        // Assumes sound files are in a 'sounds' folder, e.g., 'sounds/applause.mp3'
        document.getElementById(sound).play();
    });
    
    // Append the button to the buttons container
    buttonsContainer.appendChild(button);
    
    // --- Also create the Audio element for each sound ---
    // Creating Audio elements in the DOM allows for easy stopping/restarting
    const audio = document.createElement('audio');
    audio.src = sounds/${sound}.mp3;
    audio.id = sound; // Give the audio element an ID matching the sound name
    document.body.appendChild(audio); // Append to the body
});

// --- 2. Function to Stop All Sounds ---
function stopSounds() {
    // Iterate over all Audio elements and pause them, then reset their time
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Rewind the audio to the beginning
    });
}

// --- 3. Add Event Listener for the Stop Button ---
stopButton.addEventListener('click', stopSounds);