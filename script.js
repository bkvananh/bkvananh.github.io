// ------------------------------
// Smooth scroll khi click vào nav-btn
// ------------------------------
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(btn.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ------------------------------
// Highlight nav-btn khi scroll đến section tương ứng
// ------------------------------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-btn");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // chỉnh cho vừa chiều cao navbar
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ------------------------------
// Fade-in effect khi section xuất hiện
// ------------------------------
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ------------------------------
// Console Easter egg 😌
// ------------------------------
console.log("%cWelcome to Anh’s portfolio! 🚀", "color:#8be9fd;font-weight:bold;");
