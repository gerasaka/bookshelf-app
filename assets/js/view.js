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
  button.addEventListener('click', () => bookmarkItem(idx));

  return button;
}

function createFinishBtn(idx) {
  const button = document.createElement('button');

  button.append('F');
  button.classList.add('btn-icon', 'finish-btn');
  button.addEventListener('click', () => finishItem(idx));

  return button;
}

function createDeleteBtn(idx) {
  const button = document.createElement('button');

  button.append('D');
  button.classList.add('btn-icon', 'delete-btn');
  button.addEventListener('click', () => deleteItem(idx));

  return button;
}

function bookmarkItem(idx) {
  const prevValue = bookshelf[idx].addToBookmark;
  bookshelf[idx].addToBookmark = !prevValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookshelf));

  loadData();
}

function finishItem(idx) {
  const prev = bookshelf[idx].isComplete;
  bookshelf[idx].isComplete = !prev;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookshelf));

  loadData();
}

function deleteItem(idx) {
  bookshelf.splice(idx, 1);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookshelf));

  loadData();
}
