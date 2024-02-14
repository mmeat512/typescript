import { pageStr } from '../router';

function createList() {
  return pageStr
    .map((str, index) => {
      if (index === 0) return;
      else return `<li><a href="#/${str}">${str}</a></li>`;
    })
    .join('');
}

export const main = `
  <main>
    <ul class="main-list"> 
     ${createList()}
    </ul>
  </main>
`;
