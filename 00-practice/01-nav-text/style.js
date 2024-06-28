document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("sidebar").style.display = "block";
});

document
  .getElementById("sidebar-close-btn")
  .addEventListener("click", function () {
    document.getElementById("sidebar").style.display = "none";
  });

// Ensure sidebar is hidden when resizing to a larger screen
window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    document.getElementById("sidebar").style.display = "none";
  }
});
