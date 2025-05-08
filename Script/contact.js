document.querySelector("form").addEventListener("submit", function (e) {
  // Wait a moment for the submission to complete
  setTimeout(() => {
    document.querySelectorAll(".input").forEach(input => input.value = "");
  }, 500); // Adjust the delay if needed
});


