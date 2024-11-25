// Get buttons
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

// Get modal and close button
const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];

// No Button interaction (hover or click)
noButton.addEventListener("mouseenter", () => {
  noButton.style.transform = "translateX(100px)";
});

noButton.addEventListener("mouseleave", () => {
  noButton.style.transform = "translateX(0)";
});

// Yes Button interaction
yesButton.addEventListener("click", () => {
  modal.style.display = "block"; // Show the modal
});

// Close the modal when the 'X' is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // Hide the modal
});

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; // Hide the modal if outside is clicked
  }
});
