const appShell = document.querySelector('.app-shell');
const sidebarToggles = document.querySelectorAll('[data-sidebar-toggle]');
const desktopQuery = window.matchMedia('(min-width: 1081px)');

const setSidebarState = (isOpen) => {
  appShell?.setAttribute('data-sidebar', isOpen ? 'open' : 'closed');
};

const syncSidebarWithViewport = () => {
  setSidebarState(desktopQuery.matches);
};

sidebarToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const isOpen = appShell?.getAttribute('data-sidebar') === 'open';
    setSidebarState(!isOpen);
  });
});

desktopQuery.addEventListener('change', syncSidebarWithViewport);
syncSidebarWithViewport();
