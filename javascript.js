// JavaScript.js

// Function to change the text color of the "Busy Bee Biothane" paragraph
function changeTextColor() {
    const paragraph = document.querySelector('.overlay p');
    paragraph.style.color = 'pink';
  }
  
  // Function to display an alert with a cute message
  function showAlert() {
    alert("You're as cute as a bee!");
  }
  
  // Event listener to trigger the changeTextColor() function on page load
  window.addEventListener('load', changeTextColor);
  
  // Event listener to trigger the showAlert() function when the banner text is clicked
  const bannerText = document.querySelector('.overlay p');
  bannerText.addEventListener('click', showAlert);
  