document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.fade-in').forEach(element => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  });
});
