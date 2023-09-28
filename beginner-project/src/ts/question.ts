function fQuestion() {
  const questionList = document.querySelectorAll('li[class^=question-]');
  questionList.forEach((question) => {
    const questionEl = question.firstElementChild;
    const btnEl =
      questionEl?.querySelector<HTMLButtonElement>('.toggle-question');
    btnEl!.addEventListener('click', () => {
      question!.classList.toggle('active');
      btnEl?.querySelector('i')?.classList.toggle('active');
    });
  });
}

export default fQuestion;
