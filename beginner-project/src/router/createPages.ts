import page from '../pages/index';
import script from '../ts/index';

type pagesType = {
  [index: string]: () => void;
};

function snakeCaseToCamelCase(str: string) {
  return str
    .split('-')
    .map((word, index) => {
      if (index === 0) return word;
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    })
    .join('');
}

export default function createPages(
  container: HTMLDivElement,
  arr: Array<string>
) {
  let pages: pagesType = {};
  for (let i = 0; i < arr.length; i++) {
    const propertyName = snakeCaseToCamelCase(arr[i]);
    pages[propertyName] = () => {
      container!.className = arr[i];
      container!.innerHTML = page[propertyName];
      script[propertyName]();
    };
  }
  return pages;
}
