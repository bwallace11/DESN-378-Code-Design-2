const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', function() {
  console.log('clicked!');  // Do you see this?
  document.body.classList.toggle('dark');
});