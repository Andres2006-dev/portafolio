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
const sidebarOverlay = document.getElementById('sidebarOverlay');

function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('active');
  navToggle.classList.add('active');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('active');
  navToggle.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', () => {
  if (sidebar.classList.contains('open')) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

sidebarOverlay.addEventListener('click', closeSidebar);

document.querySelectorAll('.tree-item').forEach(link => {
  link.addEventListener('click', closeSidebar);
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
// Scroll reveal (animaciones de entrada)
// ============================================
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ============================================
// Barra de progreso de scroll
// ============================================
const scrollProgress = document.getElementById('scrollProgress');

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = progress + '%';
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

// ============================================
// Botón volver arriba
// ============================================
const backToTop = document.getElementById('backToTop');

function toggleBackToTop() {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

window.addEventListener('scroll', toggleBackToTop, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// Año en el footer
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();
