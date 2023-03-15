document.querySelector('#burger-btn').addEventListener('click', event => {
  const btn = document.querySelector('#burger-btn');
  const dropMenu = document.querySelector('#drop-menu')
  if (dropMenu.style.display === 'none') {
    dropMenu.style.display = 'block';
    btn.src = '../img/cross.svg'
  } else {
    dropMenu.style.display = 'none';
    btn.src = '../img/burger-menu.svg';
  }
})

new Swiper('.swiper-slider', {
  slidePerView: 3,
  height: 150,
  width: 300,
  spaceBetween: 100,
  breakpoints: {
    1525: {
      slidePerView: 2
    }
  }
})