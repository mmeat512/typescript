window.onload = function () {
  const menuEl = document.querySelector<HTMLDivElement>('.menu');
  const navEl = document.querySelector<HTMLElement>('nav');
  if (menuEl) {
    menuEl.addEventListener('click', () => {
      console.log(navEl);
      navEl!.classList.toggle('active');
    });
  }
};
