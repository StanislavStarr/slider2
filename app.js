const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slideList = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlide = 0;

sidebar.style.top = `-${(slideList - 1) * 100}vh`;

upButton.addEventListener('click', () => {
  changeSlide('up');
});
downButton.addEventListener('click', () => {
  changeSlide('down');
});

document.addEventListener('keydown', (event) => {
  if (event.key == 'ArrowUp') {
    changeSlide('up');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key == 'ArrowDown') {
    changeSlide('down');
  }
});

function changeSlide(params) {
  if (params === 'up') {
    activeSlide++;
    if (activeSlide === slideList) {
      activeSlide = 0;
    }
  } else if (params === 'down') {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = slideList - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlide * height}px)`;
  sidebar.style.transform = `translateY(${activeSlide * height}px)`;
}
