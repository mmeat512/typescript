enum buttonType {
  DECREASE = 'decrease',
  RESET = 'reset',
  INCREASE = 'increase',
}
window.onload = function () {
  const buttonGroupList = document.querySelectorAll('button');
  const numberEl = document.querySelector('div.number') as HTMLElement;

  buttonGroupList.forEach((button: HTMLElement) => {
    button.addEventListener('click', (e: MouseEvent) => {
      // 타입단언을 하면 타입 에러가 생기지 않음.
      const target = e.currentTarget;

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
    });
  });
};
