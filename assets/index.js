const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
  document.getElementById('form-wrapper').style.display = 'block';
});

closeModal.addEventListener('click', () => {
  document.getElementById('form-wrapper').style.display = 'none';
});

const STORAGE_KEY = 'bookshelf';

const dataFromStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
const bookshelf = dataFromStorage ?? [];

const addBookForm = document.getElementById('add-book');

addBookForm.addEventListener('submit', e => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const year = document.getElementById('year').value;
  const description = document.getElementById('description').value;
  const isComplete = document.getElementById('finish').checked;
  const addToBookmark = document.getElementById('bookmark').checked;

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('year').value = '';
  document.getElementById('description').value = '';
  document.getElementById('finish').checked = '';
  document.getElementById('bookmark').checked = '';

  const newBook = generateBook(
    title,
    author,
    year,
    description,
    isComplete,
    addToBookmark
  );

  bookshelf.push(newBook);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookshelf));
  alert('Book added');
});

function generateBook(
  title,
  author,
  year,
  description,
  isComplete,
  addToBookmark
) {
  return {
    id: +new Date(),
    title,
    author,
    year,
    description,
    isComplete,
    addToBookmark,
  };
}
