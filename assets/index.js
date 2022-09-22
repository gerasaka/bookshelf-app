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

  // TODO: refactor reset form
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('year').value = '';
  document.getElementById('description').value = '';
  document.getElementById('finish').checked = false;
  document.getElementById('bookmark').checked = false;

  const newBook = composeBook(
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
  document
    .getElementsByClassName('bookmark-list')[0]
    .append(createBookCard(newBook));
});

function composeBook(
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

// TODO: show books to booklist
function showBookList() {
  const bookmarkList = document.getElementsByClassName('bookmark-list')[0];
  const readingList = document.getElementsByClassName('reading-list')[0];
  const finishedBooks = document.getElementsByClassName('finished-books')[0];
}

function createBookCard(book) {
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('p');
  bookTitle.append(book.title);
  bookAuthor.append(book.author);

  const bookInfo = document.createElement('div');
  bookInfo.append(bookTitle, bookAuthor);

  const bookmarkButton = document.createElement('button');
  const finishedButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  bookmarkButton.append('B');
  finishedButton.append('F');
  deleteButton.append('D');

  bookmarkButton.classList.add('btn-icon');
  finishedButton.classList.add('btn-icon');
  deleteButton.classList.add('btn-icon');

  const btnGroup = document.createElement('div');
  btnGroup.classList.add('btn-group');

  btnGroup.append(bookmarkButton, finishedButton, deleteButton);

  const card = document.createElement('div');
  card.classList.add('card');
  card.append(bookInfo, btnGroup);

  return card;
}

// TODO: update booklist
// TODO: delete book
// TODO: edit book
// TODO: move book

// TODO: refactor function
