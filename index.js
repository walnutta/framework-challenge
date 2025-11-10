window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

function revealOnScroll() {
  const elements = document.querySelectorAll('.scroll-reveal');

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight * 0.85) { // trigger slightly before fully visible
      el.classList.add('visible');
    }
  });
}

// Trigger on page load and on scroll
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);
