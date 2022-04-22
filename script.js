const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

// SLIDER

let MainImg = document.querySelector('#MainImg'),
    smallImg = document.querySelectorAll('.small-img');

smallImg.forEach(element => {
  element.addEventListener('click', () => {
    MainImg.src = element.src;
  });
})