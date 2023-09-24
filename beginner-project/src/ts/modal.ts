function fModal() {
  const toggleBtn = document.querySelector<HTMLButtonElement>('.toggle-btn');
  const modalEl = document.querySelector<HTMLDivElement>('.modal');
  const closeBtn = document.querySelector<HTMLButtonElement>('.close-btn');
  toggleBtn?.addEventListener('click', () => {
    modalEl!.classList.add('active');
  });
  closeBtn?.addEventListener('click', () => {
    modalEl?.classList.remove('active');
  });
}

export default fModal;
