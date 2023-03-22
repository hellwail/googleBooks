import './style.scss';

let dots = document.getElementsByClassName('slider-dot'),
    dotsArea = document.getElementsByClassName('slider-dots__container')[0],
    slides = document.getElementsByClassName('banner'),
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
        dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
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

let timer;

function autoSlider(){
    timer = setTimeout();
}