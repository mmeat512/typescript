import fColorFillpper from './color-fillpper';
import fCounter from './counter';
import fModal from './modal';
import fNavigation from './navigation-bar';
import fQuestion from './question';
import fReviewCarousel from './review-carousel';
import fSidebar from './sidebar';

type scriptType = {
  [index: string]: () => void;
};
const script: scriptType = {
  colorFillpper: fColorFillpper,
  counter: fCounter,
  reviewCarousel: fReviewCarousel,
  navigation: fNavigation,
  sidebar: fSidebar,
  modal: fModal,
  question: fQuestion,
};

export default script;
