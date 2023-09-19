import './css/index.scss';
import { pageStr } from './router';
import createRouter from './router/router';
import createPages from './router/createPages';
import { main } from './pages/main';

const container = document.querySelector<HTMLDivElement>(
  '#app'
) as HTMLDivElement;

container!.innerHTML = main;

const pages = createPages(container, pageStr);

const router = createRouter();

router
  .addRoute('/', pages.main)
  .addRoute('#/color-fillpper', pages.colorFillpper)
  .addRoute('#/counter', pages.counter)
  .addRoute('#/navigation', pages.navigation)
  .addRoute('#/review-carousel', pages.reviewCarousel)
  .start();
