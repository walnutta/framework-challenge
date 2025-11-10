// Fade-in animation on page load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Scroll reveal with reset effect
const revealElements = document.querySelectorAll(".scroll-reveal");

function revealOnScroll() {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible"); // resets when scrolling away
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// dna-motion.js
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;  // range: -10 to 10
  const y = (e.clientY / window.innerHeight - 0.5) * 20; // range: -10 to 10

  // Apply subtle parallax movement + small rotation variation
  document.body.style.setProperty(
    "--dna-transform",
    `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${-15 + x / 10}deg)`
  );
});
