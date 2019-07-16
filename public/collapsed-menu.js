const btn = document.querySelector(".nav-toggler");
const menu = document.querySelector(".collapse-menu");

btn.addEventListener("click", e => {
  const ele = e.currentTarget;
  ele.classList.toggle("close");
  menu.classList.toggle("show");
});
