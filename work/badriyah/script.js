document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll(".line");
    const compassLink = document.querySelector(".compass-link");

    // Intersection Observer for line animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.1
    });

    lines.forEach((line) => observer.observe(line));

    // Cursor change on compass hover
    compassLink.addEventListener("mouseenter", () => {
        document.body.style.cursor = "url('assets/images/cursor3red.png'), auto";
    });

    compassLink.addEventListener("mouseleave", () => {
        document.body.style.cursor = "url('assets/images/cursor3.png'), auto";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const compass = document.querySelector(".compass");

    compass.addEventListener("mouseenter", () => {
        compass.src = "assets/images/compassred.png"; // Change to red image
    });

    compass.addEventListener("mouseleave", () => {
        compass.src = "assets/images/compass.png"; // Revert to original image
    });
});