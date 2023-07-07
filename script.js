const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', toggleTheme);

function toggleTheme() {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<img src="moon.png" alt="Dark Mode">';
    themeToggle.classList.add('fade-out');
    setTimeout(() => {
      themeToggle.classList.remove('fade-out');
      themeToggle.classList.add('fade-in');
    }, 200);
  } else {
    themeToggle.innerHTML = '<img src="sun-removebg-preview.png" alt="Light Mode">';
    themeToggle.classList.add('fade-out');
    setTimeout(() => {
      themeToggle.classList.remove('fade-out');
      themeToggle.classList.add('fade-in');
    }, 200);
  }
}
