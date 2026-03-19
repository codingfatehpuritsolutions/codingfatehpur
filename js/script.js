// DARK MODE
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggleBtn.textContent =
        toggleBtn.textContent === "🌙" ? "☀️" : "🌙";
});


// CAROUSEL ANIMATION SPEED CONTROL
const myCarousel = document.querySelector('#carouselExample');

new bootstrap.Carousel(myCarousel, {
    interval: 3000, // 3 second slide change
    pause: false,
    ride: 'carousel'
});

const boxes = document.querySelectorAll(".service-box");

window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (boxTop < trigger) {
            box.classList.add("show");
        }
    });
});