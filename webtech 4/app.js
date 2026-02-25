function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(e) {
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.querySelector('.menu-btn');
  if (window.innerWidth <= 768 && !sidebar.contains(e.target) && e.target !== menuBtn) {
    sidebar.classList.remove('open');
  }
});

// Animate skill bars on load
window.addEventListener('load', () => {
  const fills = document.querySelectorAll('.skill-bar-fill');
  fills.forEach(f => {
    const target = f.style.width;
    f.style.width = '0%';
    requestAnimationFrame(() => {
      setTimeout(() => { f.style.width = target; }, 100);
    });
  });
});
