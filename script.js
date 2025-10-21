// Smooth scroll to Projects
document.getElementById("scrollBtn")?.addEventListener("click", () => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
});

// Navbar shadow when scrolling
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 60) {
    nav.style.background = "rgba(15,15,17,0.95)";
  } else {
    nav.style.background = "rgba(20,20,22,0.9)";
  }
});
