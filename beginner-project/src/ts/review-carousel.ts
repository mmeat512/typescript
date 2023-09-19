interface reviewer {
  name: string;
  job: string;
  img: string;
  content: string;
}
const reviewList: Array<reviewer> = [
  {
    name: 'Susan Smith',
    job: 'WEB DEVELOPER',
    img: 'woman.jpg',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    name: 'Steve Jobs',
    job: 'CEO',
    img: 'man.jpg',
    content: `Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    name: 'Hong Gilldong',
    job: 'FINDING JOB',
    img: 'blank-profile.png',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
];
// const transitionStyle = '0.6s ease-out';
const fontSize = 14;
const carouselWidth = 800 + fontSize * 2;
let currentWidth = 0;
let index = 0;

function createArticle(article: HTMLDivElement, reviewer: reviewer) {
  // const articleEl = document.querySelector<HTMLElement>('article');
  if (article) {
    const imgEl = article.querySelector('img');
    imgEl!.setAttribute('src', `/review/${reviewer.img}`);
    const nameEl = article.querySelector('.profile-content span.name');
    nameEl!.textContent = reviewer.name;
    const jobEl = article.querySelector('.profile-content span.job');
    jobEl!.textContent = reviewer.job;
    const reviewContentEl = article.querySelector('.review-content');
    reviewContentEl!.textContent = reviewer.content;
  }
  return article;
}
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  const carouselList: NodeListOf<HTMLDivElement> = document.querySelectorAll(
    '.carousel-list > article'
  );
  for (let i = 0; i < carouselList.length; i++) {
    createArticle(carouselList[i], reviewList[i]);
  }
});

function prevClick(carouselList: NodeListOf<HTMLDivElement>) {
  if (index > 0) {
    currentWidth = carouselWidth * (index - 1);
    carouselList[index].setAttribute('class', 'article-carousel');
    carouselList[index].style.transform = `translateX(-${currentWidth}px)`;
    carouselList[index - 1].setAttribute('class', 'article-carousel');
    carouselList[index - 1].style.transform = `translateX(-${currentWidth}px)`;
    index--;
  }
}

function nextClick(carouselList: NodeListOf<HTMLDivElement>) {
  if (index < carouselList.length - 1) {
    currentWidth = carouselWidth * (index + 1);
    carouselList[index].setAttribute('class', 'article-carousel');
    carouselList[index].style.transform = `translateX(-${currentWidth}px)`;
    carouselList[index + 1].setAttribute('class', 'article-carousel');
    carouselList[index + 1].style.transform = `translateX(-${currentWidth}px)`;
    index++;
  }
}

function resetTransform(carouselList: NodeListOf<HTMLDivElement>) {
  for (const carousel of carouselList) {
    carousel.style.transform = 'none';
  }
}

function fReviewCarousel() {
  const prevEl = document.querySelector('.prev');
  const carouselList: NodeListOf<HTMLDivElement> = document.querySelectorAll(
    '.carousel-list > article'
  );

  prevEl!.addEventListener('click', () => {
    prevClick(carouselList);
  });

  const nextEl = document.querySelector('.next');
  nextEl!.addEventListener('click', () => {
    nextClick(carouselList);
  });

  const surpriseButton = document.querySelector('button');
  surpriseButton?.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * carouselList.length);
    console.log(`index: ${index}, randomIndex: ${randomIndex}`);
    if (index < randomIndex) {
      currentWidth = carouselWidth * randomIndex;
    } else if (index > randomIndex) {
      currentWidth = carouselWidth * randomIndex;
    }
    carouselList[index].setAttribute('class', 'article-carousel');
    carouselList[index].style.transform = `translateX(-${currentWidth}px)`;
    carouselList[randomIndex].setAttribute('class', 'article-carousel');
    carouselList[
      randomIndex
    ].style.transform = `translateX(-${currentWidth}px)`;
    for (let i = index; i <= randomIndex; i++) {
      carouselList[i].setAttribute('class', 'article-carousel');
      carouselList[i].style.transform = `translateX(-${currentWidth}px)`;
    }
    index = randomIndex;
  });
}

export default fReviewCarousel;
