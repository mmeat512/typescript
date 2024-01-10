import { pagesType } from './createPages';
import { Router } from './router';

export const pageStr = [
  'main',
  'color-fillpper',
  'counter',
  'navigation',
  'review-carousel',
  'sidebar',
  'modal',
  'question',
  'our-menu',
];

export function addRouteList(router: Router, pages: pagesType) {
  router
    .addRoute('/', pages.main)
    .addRoute('#/color-fillpper', pages.colorFillpper)
    .addRoute('#/counter', pages.counter)
    .addRoute('#/navigation', pages.navigation)
    .addRoute('#/review-carousel', pages.reviewCarousel)
    .addRoute('#/sidebar', pages.sidebar)
    .addRoute('#/modal', pages.modal)
    .addRoute('#/question', pages.question)
    .addRoute('#/our-menu', pages.ourMenu);

  return router;
}
