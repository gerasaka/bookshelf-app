const bookmarkList = document.getElementById('bookmark-list');
const readingList = document.getElementById('reading-list');
const finishedbooks = document.getElementById('finished-books');

function loadData() {
  getBooks();

  bookmarkList.innerHTML = '';
  readingList.innerHTML = '';
  finishedbooks.innerHTML = '';

  bookshelf.map((book, idx) => {
    renderBookList(book, idx);
  });
}

function renderBookList(book, idx) {
  const card = createCard(book, idx);

  if (book.isComplete) finishedbooks.append(card);
  else readingList.append(card);

  if (book.addToBookmark) {
    const bookmarkCard = createCard(book, idx);
    bookmarkList.append(bookmarkCard);
  }
}

function createCard(book, idx) {
  const card = document.createElement('div');
  card.classList.add('card');

  const bookInfo = document.createElement('div');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('p');

  bookTitle.append(book.title);
  bookAuthor.append(book.author);
  bookInfo.append(bookTitle, bookAuthor);

  const { bookmarkBtn, finishBtn, deleteBtn } = createButtons(idx);

  const btnGroup = document.createElement('div');
  btnGroup.classList.add('btn-group');
  btnGroup.append(bookmarkBtn, finishBtn, deleteBtn);

  card.append(bookInfo, btnGroup);

  card['itemID'] = book.id;
  card['itemIndex'] = idx;

  card.addEventListener('click', e => showDetails(book));

  return card;
}

function createButtons(idx) {
  const bookmarkBtn = createBookmarkBtn(idx);
  const finishBtn = createFinishBtn(idx);
  const deleteBtn = createDeleteBtn(idx);

  return { bookmarkBtn, finishBtn, deleteBtn };
}

function createBookmarkBtn(idx) {
  const button = document.createElement('button');

  button.append('B');
  button.classList.add('btn-icon', 'bookmark-btn');
  button.addEventListener('click', e => bookmarkItem(e, idx));

  return button;
}

function createFinishBtn(idx) {
  const button = document.createElement('button');

  button.append('F');
  button.classList.add('btn-icon', 'finish-btn');
  button.addEventListener('click', e => finishItem(e, idx));

  return button;
}

function createDeleteBtn(idx) {
  const button = document.createElement('button');

  button.append('D');
  button.classList.add('btn-icon', 'delete-btn');
  button.addEventListener('click', e => deleteItem(e, idx));

  return button;
}

function bookmarkItem(e, idx) {
  e.stopPropagation();

  const prevValue = bookshelf[idx].addToBookmark;
  bookshelf[idx].addToBookmark = !prevValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookshelf));

  loadData();
}

function finishItem(e, idx) {
  e.stopPropagation();

  const prev = bookshelf[idx].isComplete;
  bookshelf[idx].isComplete = !prev;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookshelf));

  loadData();
}

function deleteItem(e, idx) {
  e.stopPropagation();

  bookshelf.splice(idx, 1);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookshelf));

  loadData();
}

function showDetails(book) {
  const container = document.getElementById('details-wrapper');

  const title = container.getElementsByTagName('h2')[0];
  const author = container.getElementsByTagName('p')[0];
  const year = container.getElementsByTagName('p')[1];
  const description = container.getElementsByTagName('p')[3];

  title.innerHTML = book.title;
  author.innerHTML = 'by: ' + book.author;
  year.innerHTML = book.year;
  description.innerHTML = book.description;

  container.style.display = 'block';
  console.log(container);
}

function searchBook() {
  const keyword = document.getElementById('search-field').value.toLowerCase();

  readingList.innerHTML = '';
  finishedbooks.innerHTML = '';

  if (keyword === '') return loadData();

  for (let i = 0; i < bookshelf.length; i++) {
    if (bookshelf[i].title.toLowerCase().includes(keyword)) {
      const book = bookshelf[i];
      const card = createCard(book, i);

      if (book.isComplete) finishedbooks.append(card);
      else readingList.append(card);
    }
  }
}
