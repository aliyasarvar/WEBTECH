// ── Auth Guard ────────────────────────────────────────────────────
// Runs immediately — blocks page render if not logged in
(function() {
  const user = JSON.parse(localStorage.getItem('pt_user') || 'null');
  if (!user) {
    window.location.replace('login.html');
    document.write(''); // Stop any further rendering
  }
})();

// ── Inject user info into sidebar ─────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  const user = JSON.parse(localStorage.getItem('pt_user') || 'null');
  if (!user) return;

  const avatar = document.querySelector('.user-avatar');
  const nameEl = document.querySelector('.user-name');
  const roleEl = document.querySelector('.user-role');

  if (avatar) avatar.textContent = user.initials || user.name.slice(0, 2).toUpperCase();
  if (nameEl) nameEl.textContent = user.name;
  if (roleEl) roleEl.textContent = user.batch || 'Student';

  // Update welcome message on dashboard if present
  const pageSub = document.querySelector('.page-sub');
  if (pageSub && pageSub.textContent.includes('Welcome')) {
    pageSub.textContent = `Welcome back, ${user.name.split(' ')[0]}. You're on track!`;
  }
});

// ── Logout function (available globally) ─────────────────────────
function logout() {
  localStorage.removeItem('pt_user');
  window.location.href = 'login.html';
}

// ── Toggle Sidebar (shared) ───────────────────────────────────────
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

document.addEventListener('click', function(e) {
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.querySelector('.menu-btn');
  if (sidebar && menuBtn && window.innerWidth <= 768 && !sidebar.contains(e.target) && e.target !== menuBtn) {
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
