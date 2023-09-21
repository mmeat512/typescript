function fSidebar() {
  const toggleBtnEl = document.querySelector<HTMLButtonElement>('.toggle');
  const sidebarEl = document.querySelector<HTMLElement>('aside');
  const closeBtnEl = document.querySelector<HTMLButtonElement>('.close-btn');

  toggleBtnEl?.addEventListener('click', () => {
    sidebarEl?.classList.toggle('active');
  });

  closeBtnEl!.addEventListener('click', () => {
    sidebarEl?.classList.remove('active');
  });
}

export default fSidebar;
