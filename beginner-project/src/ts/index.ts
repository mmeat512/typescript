import fColorFillpper from './color-fillpper';
import fCounter from './counter';
import fNavigation from './navigation-bar';
import fReviewCarousel from './review-carousel';

type scriptType = {
  [index: string]: () => void;
};
const script: scriptType = {
  colorFillpper: fColorFillpper,
  counter: fCounter,
  reviewCarousel: fReviewCarousel,
  navigation: fNavigation,
};

export default script;
