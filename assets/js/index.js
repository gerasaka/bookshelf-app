document.addEventListener('DOMContentLoaded', () => {
  loadData();
});

const openFormModal = document.getElementById('open-form-modal');
const closeFormModal = document.getElementById('close-form-modal');
const closeDetailModal = document.getElementById('close-details-modal');

openFormModal.addEventListener('click', () => {
  document.getElementById('form-wrapper').style.display = 'block';
});

closeFormModal.addEventListener('click', () => {
  document.getElementById('form-wrapper').style.display = 'none';
});

closeDetailModal.addEventListener('click', () => {
  document.getElementById('details-wrapper').style.display = 'none';
});

const addBookForm = document.getElementById('add-book');
const searchButton = document.getElementById('search');

addBookForm.addEventListener('submit', e => saveBook(e));
searchButton.addEventListener('click', e => searchBook(e));
