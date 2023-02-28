/* SCROLL */

const link = document.querySelector('.asd');

link.addEventListener('click', function(event) {
  event.preventDefault();
  
  const target = document.querySelector(link.getAttribute('href'));
  target.scrollIntoView({ behavior: 'smooth' });
});
