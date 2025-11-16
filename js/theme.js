function toggleTheme() {
  const html = document.documentElement;
  const tema = html.getAttribute('data-bs-theme');
  const icon = document.getElementById('themeIcon');
  if (tema === 'dark') {
    html.setAttribute('data-bs-theme', 'light');
    icon.className = 'bi bi-moon me-1';
  } else {
    html.setAttribute('data-bs-theme', 'dark');
    icon.className = 'bi bi-sun me-1';
  }
}
