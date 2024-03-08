const observer_text = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("text-animation");
            return;
        }
    });
});
const text = document.querySelectorAll(".animated-text");
text.forEach((element) => observer_text.observe(element));
