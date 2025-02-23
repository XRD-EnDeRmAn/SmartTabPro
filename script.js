// Initialize Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js config loaded.');
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'slide'
});

// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  
  // Load theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeToggle.checked = true;
  }
  
  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  });
});

// (Optional) Additional JS for Magnetic Button Effect
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    this.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
  });
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'translate(0, 0)';
  });
});
