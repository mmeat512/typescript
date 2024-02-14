enum buttonType {
  DECREASE = 'decrease',
  RESET = 'reset',
  INCREASE = 'increase',
}
function fCounter() {
  const buttonGroupList = document.querySelectorAll('button');
  const numberEl = document.querySelector('div.number') as HTMLElement;

  function handleClick(this: HTMLElement) {
    const target = this;

    if (target?.id === buttonType.DECREASE) {
      if (numberEl) {
        let number: number = Number(numberEl?.innerHTML) | 0;
        numberEl.innerHTML = `${number - 1}`;
      }
    } else if (target?.id === buttonType.RESET) {
      numberEl.innerHTML = '0';
    } else if (target?.id === buttonType.INCREASE) {
      let number: number = Number(numberEl?.innerHTML) | 0;
      numberEl.innerHTML = `${number + 1}`;
    }
  }

  buttonGroupList.forEach((button: HTMLElement) => {
    button.addEventListener('click', handleClick);
  });
}

export default fCounter;
