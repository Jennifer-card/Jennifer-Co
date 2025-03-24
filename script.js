// This script is for potential interactive elements (e.g., form validation, animations).
document.addEventListener('DOMContentLoaded', () => {
  // Add your JS functionality here if needed
});


document.getElementById("termsForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the form from reloading the page

  // Check if terms are accepted
  if (document.getElementById("acceptTerms").checked) {
    document.getElementById("confirmationMessage").style.display = "block"; // Show the checkmark confirmation
    document.getElementById("submitBtn").disabled = true; // Disable the button after submission
    document.getElementById("firstName").disabled = true; // Disable the name fields after submission
    document.getElementById("lastName").disabled = true; // Disable the name fields after submission
  }
});
