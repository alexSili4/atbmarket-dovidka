const questionsListRef = document.querySelector('.js-help-page-questions-list');

const onQuestionsListClick = (e) => {
  e.target.closest('.js-help-page-questions-container').classList.toggle('is-hidden');
};

questionsListRef.addEventListener('click', onQuestionsListClick);
