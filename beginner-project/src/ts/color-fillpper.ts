type colorType = 'COLOR' | 'HEX';
const TYPE_COLOR = 'COLOR';
const TYPE_HEX = 'HEX';
type HTML = HTMLElement | null;

const COLOR = [
  'red',
  'blue',
  'orange',
  'green',
  'maroon',
  'yellow',
  'olive',
  'purple',
  'teal',
  'lime',
  'aqua',
];
const HEX = [
  '0',
  '1',
  '2',
  '3',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

function getRandomIndex(max: number) {
  return Math.floor(Math.random() * max);
}

function colorChange() {
  const randomIndex = getRandomIndex(COLOR.length);
  return COLOR[randomIndex];
}

function hexChange() {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    const randomIndex = getRandomIndex(HEX.length);
    hexColor += HEX[randomIndex];
  }
  return hexColor;
}

window.onload = function () {
  const colorTab = document.getElementById('color');
  const hexTab = document.getElementById('hex');
  hexTab?.addEventListener('click', () => {
    hexTab.className = 'active';
    colorTab?.removeAttribute('class');
  });
  colorTab?.addEventListener('click', () => {
    colorTab.className = 'active';
    hexTab?.removeAttribute('class');
  });
  const sectionEl = document.querySelector('section') as HTMLElement;
  const buttonEl = document.querySelector(
    'section > div > button'
  ) as HTMLElement;
  const spanEl = document.querySelector('section > div > p > span') as Element;
  buttonEl?.addEventListener('click', () => {
    const type = document
      .querySelector('.active')
      ?.getAttribute('id')
      ?.toUpperCase();
    if (type === TYPE_COLOR) {
      const color = colorChange();
      sectionEl.style.background = color;
      /** 정규식 첫글자 대문자 변환 */
      spanEl.innerHTML = color.replace(/^[a-z]/, (char) => char.toUpperCase());
      buttonEl.style.background = color;
    } else if (type === TYPE_HEX) {
      const color = hexChange();
      sectionEl.style.background = color;
      spanEl.innerHTML = color;
      buttonEl.style.background = color;
    }
  });
};
