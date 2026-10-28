const mburger = document.getElementById('mburger');
const options = document.querySelector('nav.options');

mburger.addEventListener('click', function() {
  this.classList.toggle('active');
  options.classList.toggle('active');
});