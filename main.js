// Tailwind configuration (for deploy-time if needed)
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface:          'var(--md-sys-color-surface)',
        background:       'var(--md-sys-color-background)',
        onSurface:        'var(--md-sys-color-on-surface)',
        onBackground:     'var(--md-sys-color-on-background)',
        primary:          'var(--md-sys-color-primary)',
        onPrimary:        'var(--md-sys-color-on-primary)',
        primaryContainer: 'var(--md-sys-color-primary-container)',
        secondary:        'var(--md-sys-color-secondary)',
        onSecondary:      'var(--md-sys-color-on-secondary)'
      }
    }
  }
};

// Mobile menu toggle
document.getElementById('burger').addEventListener('click', () => {
  const menu = document.getElementById('mobileMenu');
  const hidden = menu.classList.toggle('hidden');
  menu.setAttribute('aria-hidden', hidden);
});

// Theme toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
});

// Initialize theme based on preference
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
