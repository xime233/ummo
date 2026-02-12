const buttons = document.querySelectorAll('[data-scroll]');
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const partners = [...document.querySelectorAll('.partner')];
const dots = [...document.querySelectorAll('.dot')];
let index = 0;

setInterval(() => {
  partners[index].classList.remove('active');
  dots[index].classList.remove('active');
  index = (index + 1) % partners.length;
  partners[index].classList.add('active');
  dots[index].classList.add('active');
}, 2400);
