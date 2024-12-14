document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); // All sections to observe
    const navLinks = document.querySelectorAll(".nav-links a"); // Navigation links
  
    // Add smooth scrolling to navigation links
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute("href").substring(1); // Get the section ID
        const targetSection = document.getElementById(targetId); // Get the section element
  
        targetSection.scrollIntoView({
          behavior: "smooth", // Smooth scrolling
          block: "start", // Align the section to the top of the viewport
        });
      });
    });
  
    // IntersectionObserver options
    const observerOptions = {
      root: null, // Use the viewport as the container
      rootMargin: "0px", // No margin
      threshold: 0.5, // 50% of the section should be visible
    };
  
    // Observer to detect active section
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
  
        if (entry.isIntersecting) {
          navLinks.forEach((navLink) => navLink.classList.remove("active"));
          link.classList.add("active");
        }
      });
    }, observerOptions);
  
    // Observe each section
    sections.forEach((section) => observer.observe(section));
  });  