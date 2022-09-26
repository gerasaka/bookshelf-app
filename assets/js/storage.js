const STORAGE_KEY = 'bookshelf';

let bookshelf = [];

function getBooks() {
  try {
    if (typeof Storage !== 'undefined') {
      if (localStorage.getItem(STORAGE_KEY) === null) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookshelf));
      } else {
        const dataFromStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
        bookshelf = dataFromStorage;
      }
    } else alert("Your browser doesn't support Web Storage");
  } catch (e) {
    if (e.name == 'NS_ERROR_FILE_CORRUPTED') {
      alert(
        'Sorry, it looks like your browser storage has been corrupted. Please clear your storage by deleting your browser Cookies. This will remove the corrupted browser storage across all sites.'
      );
    }
  }
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

  // updateBookList(newBook, bookshelf.length);
  loadData();
}
