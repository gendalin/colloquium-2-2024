document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize GSAP timeline for diagonal scrolling
    const diagonalItems = document.querySelectorAll('.diagonal-item');
    
    diagonalItems.forEach((item, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: '+=200%',
                scrub: 1,
                markers: false,
            }
        });

        // Start from bottom right
        tl.fromTo(item,
            {
                x: '150%',
                y: '50%',
                // opacity: 0,
            },
            {
                x: '-200%',
                y: '-50%',
                // opacity: 1,
                duration: 1.5
            }
        );
    });

    // Handle smooth scrolling for mobile
    if ('ontouchstart' in window) {
        document.body.style.overflow = 'auto';
    }

    // Responsive handling
    const handleResize = () => {
        ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Clean up function
    return () => {
        window.removeEventListener('resize', handleResize);
    };
});
