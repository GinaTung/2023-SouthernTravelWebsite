document.addEventListener("DOMContentLoaded", function() {
    // Simulate a delay for the loading animation
    setTimeout(function() {
      // Hide the loader
      document.querySelector('.loader').style.display = 'none';
      
      // Show the loaded image
      document.getElementById('loadedImage').style.display = 'block';
    }, 15000); // Adjust the timeout value as needed
  });