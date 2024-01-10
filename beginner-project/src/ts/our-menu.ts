import menuArticle, { Imenu } from '../components/menuArticle';

function setMenuList(target: Element, menuList: Array<Imenu>) {
  target.remove;
  menuList.forEach((menu) => target.append(menuArticle(menu)));
  //   const list = menuList.reduce((arr, cur) =>arr = arr _ c);
}

function fOurMenu() {
  const menuList: Array<Imenu> = [
    {
      type: 'breakfast',
      img: 'item-1',
      name: 'Buttermilk Pancakes',
      price: '15.99',
      description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
      type: 'lunch',
      img: 'item-2',
      name: 'Diner Double',
      price: '13.99',
      description:
        'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
    },
    {
      type: 'shakes',
      img: 'item-3',
      name: `Godzilla Milkshake`,
      price: '6.99',
      description:
        'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
    },
    {
      type: 'breakfast',
      img: 'item-4',
      name: `Country Delight`,
      price: '20.99',
      description:
        'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,',
    },
    {
      type: 'lunch',
      img: 'item-5',
      name: `Egg Attack`,
      price: '22.99',
      description: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
    },
    {
      type: 'shakes',
      img: 'item-6',
      name: `Oreo Dream`,
      price: '18.99',
      description:
        'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday',
    },
    {
      type: 'breakfast',
      img: 'item-7',
      name: `Bacon Overflow`,
      price: '8.99',
      description:
        'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird',
    },
    {
      type: 'lunch',
      img: 'item-8',
      name: `American Classic`,
      price: '12.99',
      description:
        'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut',
    },
    {
      type: 'shakes',
      img: 'item-9',
      name: `Quarantine Buddy`,
      price: '16.99',
      description:
        'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
    },
    {
      type: 'dinner',
      img: 'item-10',
      name: `Steak Dinner`,
      price: '39.99',
      description:
        'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
    },
  ];

  const articleListEl = document.querySelector('.article-list');
  if (articleListEl) setMenuList(articleListEl, menuList);

  const buttonList = document.querySelector('.btn-group')!.children;
  for (const btn of buttonList) {
    console.log(btn);
    console.log(btn.dataset.type);
    const menuType = btn.dataset.type;
    btn.addEventListener('click', function () {
      btn.classList.toggle('active');
      menuList.filter((menu) => menu.type === menuType);
    });
  }
}

export default fOurMenu;
