let slideIndex = 0;
let totalPrice = 0;

const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlides() {
    const track = document.querySelector('.carousel-track');
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    showSlides();
}

function likeDish(dishId, likedImageSrc) {
    const dish = document.getElementById(dishId);
    const image = dish.querySelector('img');
    image.src = likedImageSrc;
}

function selectDish(dishName, price) {
    document.getElementById('selected-dish').innerText = dishName;
    totalPrice += price;
    document.getElementById('total-price').innerText = `$${totalPrice.toLocaleString()} COP`;
}

setInterval(() => {
    moveSlide(1);
}, 3000);

document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
