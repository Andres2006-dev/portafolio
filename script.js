// ============================================
// Tema oscuro / claro (con memoria en localStorage)
// ============================================
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
  root.setAttribute('data-theme', 'light');
  themeToggle.setAttribute('aria-pressed', 'true');
}

themeToggle.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  if (isLight) {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
    themeToggle.setAttribute('aria-pressed', 'false');
  } else {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeToggle.setAttribute('aria-pressed', 'true');
  }
});

// ============================================
// Menú móvil (sidebar tipo árbol de archivos)
// ============================================
const sidebar = document.getElementById('sidebar');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.tree-item').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================
// Resaltar sección activa + breadcrumb tipo editor
// ============================================
const sections = document.querySelectorAll('.section[id]');
const treeItems = document.querySelectorAll('.tree-item');
const breadcrumb = document.getElementById('breadcrumb');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      treeItems.forEach(item => {
        const match = item.getAttribute('href') === `#${id}`;
        item.classList.toggle('active', match);
        if (match) breadcrumb.textContent = `portafolio / ${item.dataset.target}`;
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));

// ============================================
// Año en el footer
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();
