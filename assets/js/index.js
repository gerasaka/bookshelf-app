const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
  document.getElementById('form-wrapper').style.display = 'block';
});

closeModal.addEventListener('click', () => {
  document.getElementById('form-wrapper').style.display = 'none';
});

// const openModal = document.getElementById('open-modal');
// const closeModal = document.getElementById('close-modal');

// openModal.addEventListener('click', () => {
//   document.getElementById('form-wrapper').style.display = 'block';
// });

// closeModal.addEventListener('click', () => {
//   document.getElementById('form-wrapper').style.display = 'none';
// });

document.addEventListener('DOMContentLoaded', () => {
  loadData();
});

const addBookForm = document.getElementById('add-book');

addBookForm.addEventListener('submit', e => saveBook(e));

// TODO: delete book
// TODO: edit book
// TODO: move book

// TODO: refactor function
