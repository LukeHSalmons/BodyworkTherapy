document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');
    var navLinks = navMenu.querySelectorAll('li a');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('toggle'); // Toggle class to transform hamburger to X
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('toggle'); // Revert back to hamburger when a link is clicked
            }
        });
    });
});


// Function to get query parameters
function getQueryParam(param) {
    let searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
  }
  
  // Function to show the popup message
  function showPopupMessage() {
    if (getQueryParam('form') === 'success') {
      const message = document.createElement('div');
      message.textContent = 'Thank you for your submission!';
      message.style.position = 'fixed';
      message.style.bottom = '20px';
      message.style.left = '20px';
      message.style.backgroundColor = 'lightgreen';
      message.style.padding = '10px';
      message.style.borderRadius = '5px';
      message.style.zIndex = '1000';
      document.body.appendChild(message);
  
      // Remove the message after 5 seconds
      setTimeout(() => {
        if (document.body.contains(message)) {
          document.body.removeChild(message);
        }
      }, 5000);
    }
  }
  
  // Ensure the DOM is loaded before running the script
  document.addEventListener('DOMContentLoaded', showPopupMessage);
  