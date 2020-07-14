const track = document.querySelector('.imagecontainers');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carouselbutton.carouselbutton--right');
const prevButton = document.querySelector('.carouselbutton.carouselbutton--left');
const nav = document.querySelector('.carouselnav');
const navselectors = Array.from(nav.children);

const slidewidth = slides[0].getBoundingClientRect().width;

// Arrange Slides next to each other
const setSlidePosition = (slide, index) => {
      slide.style.left = slidewidth * index + 'px';
};

slides.forEach(setSlidePosition);

// Function To Get Slides
const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove('current-slide');
      targetDot.classList.add('current-slide');
}

prevButton.addEventListener('click' ,  e  => {
      const currentSlide = track.querySelector('.current-slide');
      const prevSlide = currentSlide.previousElementSibling;
      const currentDot = nav.querySelector('.current-slide')
      const prevDot = currentDot.previousElementSibling;
      
      moveToSlide(track, currentSlide, prevSlide);
      updateDots(currentDot, prevDot);
});

// Move to the next slide
nextButton.addEventListener('click' ,  e  => {
      const currentSlide = track.querySelector('.current-slide');
      const nextSlide = currentSlide.nextElementSibling;
      const currentDot = nav.querySelector('.current-slide')
      const nextDot = currentDot.nextElementSibling;
      
      moveToSlide(track, currentSlide, nextSlide);
      updateDots(currentDot, nextDot);
});
      
nav.addEventListener('click' ,  e => {
      const targetDot = e.target.closest('button');

      if(!targetDot) return;

      const currentSlide = track.querySelector('.current-slide');
      const currentDot = nav.querySelector('.current-slider');
      const targetIndex = navselectors.findIndex(navselectors => navselectors === targetDot);
      const targetSlide = slides[targetIndex];

      moveToSlide(track, currentSlide, targetSlide);
      updateDots(currentDot, targetDot);
      
})
