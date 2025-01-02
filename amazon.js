
const headerSlider = document.querySelector('.header-slider');
const headerImgs = headerSlider.querySelectorAll('ul img');
const headerPrevBtn = document.querySelector('.control-prev');
const headerNextBtn = document.querySelector('.control-next');
let currentSlide = 0;

function changeHeaderSlide() {
    for (let i = 0; i < headerImgs.length; i++) {
        headerImgs[i].style.display = 'none';
    }
    headerImgs[currentSlide].style.display = 'block';
}

changeHeaderSlide();

// Header slider previous button
headerPrevBtn.addEventListener('click', (e) => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = headerImgs.length - 1;
    }
    changeHeaderSlide();
});


headerNextBtn.addEventListener('click', (e) => {
    if (currentSlide < headerImgs.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    changeHeaderSlide();
});
