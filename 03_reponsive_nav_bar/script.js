let toggle=document.getElementById('toggle');

let navbar=document.querySelector('.nav-links');


toggle.addEventListener('click',()=>{
    navbar.classList.toggle('show');
    toggle.classList.toggle('rotate');
});
window.addEventListener('resize',()=>{
    navbar.classList.remove('show');
    toggle.classList.remove('rotate');
});

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});