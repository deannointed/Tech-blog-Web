document.addEventListener("DOMContentLoaded", () => {
  // ===== Typing effect for the About Page Title =====
  const title = document.querySelector(".intro h2");
  if (title) {
  const titleText = title.textContent;
  title.textContent = "";
  let index = 0;
  
  ```
  function typeEffect() {
    if (index < titleText.length) {
      title.textContent += titleText.charAt(index);
      index++;
      setTimeout(typeEffect, 80);
    }
  }
  typeEffect();
  ```
  
  }
  
  // ===== Reveal sections on scroll with throttling =====
  const sections = document.querySelectorAll(".about-page section");
  const throttle = (fn, limit) => {
  let lastCall = 0;
  return (...args) => {
  const now = Date.now();
  if (now - lastCall >= limit) {
  lastCall = now;
  fn(...args);
  }
  };
  };
  
  const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.8;
  sections.forEach((section) => {
  const rect = section.getBoundingClientRect();
  if (rect.top < triggerPoint) {
  section.classList.add("visible");
  }
  });
  };
  
  window.addEventListener("scroll", throttle(revealOnScroll, 100));
  revealOnScroll();
  
  // ===== Glow effect for all buttons =====
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  btn.style.background = `radial-gradient(circle at ${x}px ${y}px, #00e6ff, #007bff)`;
  });
  
  ```
  btn.addEventListener("mouseleave", () => {
    btn.style.background = "linear-gradient(90deg, #00f5ff, #007bff)";
  });
  ```
  
  });
  });
  