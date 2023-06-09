import '../styles/style.scss';
import{getBooks} from './getBooks.js';


let dots = document.getElementsByClassName('slider-dot'),
    dotsArea = document.getElementsByClassName('slider-dots')[0],
    slides = document.getElementsByClassName('slider'),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('slider-dot__active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('slider-dot__active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('slider-dot') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
}

setInterval(function() {
    plusSlides(1);
}, 5000);




