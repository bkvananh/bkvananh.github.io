// Smooth scroll to Projects section
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

// Navbar color change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "0 1px 10px rgba(0, 0, 0, 0.05)";
  }
});
