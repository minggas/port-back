const btn = document.querySelector('.nav-toggler');
const menu = document.querySelector('.collapse-menu');

btn.addEventListener('click', (e) => {
  console.log(e.currentTarget.classList);
});
