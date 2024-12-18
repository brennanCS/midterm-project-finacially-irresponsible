const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.content');

    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // If the section is within the viewport, add the 'show' class
        if (sectionPosition < windowHeight) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});

window.addEventListener('scroll', function() {
    // Get the scroll position
    let scrollPosition = window.scrollY;

    // Apply the scroll position to the background position (for parallax effect)
    document.querySelector('.merc-background').style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    document.querySelector('.space-background').style.backgroundPosition = `center ${scrollPosition * 0.25}px`;
});