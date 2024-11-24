const player = document.getElementById('player');
const videoTitle = document.getElementById('videoTitle');

// Function to embed video and update UI
function embedVideo(url, button) {
  // Update iframe source
  player.src = url;

  // Update the "Currently Playing" text with the button's text content
  videoTitle.textContent = button.textContent;

  // Highlight the active button
  const buttons = document.querySelectorAll('.buttons-container button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

// Automatically play the first video when the page loads
window.onload = function() {
  const firstButton = document.querySelector('.buttons-container button');
  embedVideo(firstButton.getAttribute('onclick').split("'")[1], firstButton);  // Extract URL from button's onclick and play the first video

  // Set the first button as active
  firstButton.classList.add('active');
}
