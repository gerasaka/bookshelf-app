// TODO: refactor wrapper and modal

document.addEventListener('DOMContentLoaded', () => {
  loadData();
});

const openFormModal = document.getElementById('open-form-modal');
const closeFormModal = document.getElementById('close-form-modal');
const closeDetailsModal = document.getElementById('close-details-modal');
const closeEditModal = document.getElementById('close-edit-modal');

openFormModal.addEventListener('click', () => {
  document.getElementById('form-wrapper').style.display = 'block';
});

closeFormModal.addEventListener('click', () => {
  document.getElementById('form-wrapper').style.display = 'none';
});

closeDetailsModal.addEventListener('click', () => {
  document.getElementById('details-wrapper').style.display = 'none';
});

closeEditModal.addEventListener('click', () => {
  editWrapper.style.display = 'none';
});

const addBookForm = document.getElementById('add-book');
const searchButton = document.getElementById('search');
const detailsModal = document.getElementById('details-wrapper');
const editWrapper = document.getElementById('edit-wrapper');
const editForm = document.getElementById('edit-book');

addBookForm.addEventListener('submit', e => saveBook(e));
searchButton.addEventListener('click', e => searchBook(e));
