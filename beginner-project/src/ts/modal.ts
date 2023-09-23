function fModal() {
  const toggleBtn =
    document.querySelector<HTMLButtonElement>('.modal .toggle-btn');
  const modalEl = document.querySelector<HTMLDivElement>('.modal .modal-inner');
  const closeBtn =
    document.querySelector<HTMLButtonElement>('.modal .close-btn');
  toggleBtn?.addEventListener('click', () => {
    modalEl!.classList.add('active');
  });
  closeBtn?.addEventListener('click', () => {
    modalEl?.classList.remove('active');
  });
}

export default fModal;
