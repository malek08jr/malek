// Smooth scroll animation for nav links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });
  
  // Simple form submission (can be expanded with real backend/API)
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks for your message! We'll get back to you soon.");
    e.target.reset();
  });
  