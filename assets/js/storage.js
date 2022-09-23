const STORAGE_KEY = 'bookshelf';

let bookshelf = [];

function getBooks() {
  const dataFromStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  bookshelf = dataFromStorage ?? [];
}

function saveBook(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const year = document.getElementById('year').value;
  const description = document.getElementById('description').value;
  const isComplete = document.getElementById('finish').checked;
  const addToBookmark = document.getElementById('bookmark').checked;

  addBookForm.reset();

  const newBook = {
    id: +new Date(),
    title,
    author,
    year,
    description,
    isComplete,
    addToBookmark,
  };

  bookshelf.push(newBook);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookshelf));
  alert('Book added!');

  updateBookList(newBook);
}
