import { minus } from '../pages/icon';

function fQuestion() {
  const questionList = document.querySelectorAll('li[class^=question-]');
  questionList.forEach((question) => {
    const questionEl = question.firstElementChild;
    const btnEl = questionEl?.querySelector('.toggle-question');
    const answerEl = question.lastElementChild;
    btnEl!.addEventListener('click', () => {
      answerEl!.classList.toggle('active');
      if (answerEl?.classList.contains('active')) {
        //     btnEl?.innerHTML = minus('24', '24');
      }
    });
  });
}

export default fQuestion;
