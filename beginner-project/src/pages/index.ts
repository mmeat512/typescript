import { colorFillpper } from './color-fillpper';
import { counter } from './counter';
import { main } from './main';
import { navigation } from './navigation-bar';
import { reviewCarousel } from './review-carousel';

type pagesType = {
  [index: string]: string;
};
const pages: pagesType = {
  main: main,
  colorFillpper: colorFillpper,
  counter: counter,
  reviewCarousel: reviewCarousel,
  navigation: navigation,
};

export default pages;