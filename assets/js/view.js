function loadData() {
  getBooks();

  bookshelf.map(book => {
    renderBookList(book);
  });
}

function renderBookList(book) {
  const bookmarkList = document.getElementsByClassName('bookmark-list')[0];
  const readingList = document.getElementsByClassName('reading-list')[0];
  const finishedbooks = document.getElementsByClassName('finished-books')[0];

  const card = createCard(book);

  if (book.addToBookmark) bookmarkList.append(card);
  if (book.isComplete) finishedbooks.append('card');
  else readingList.append(card);
}

function createCard(book) {
  const card = document.createElement('div');
  card.classList.add('card');

  const bookInfo = document.createElement('div');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('p');

  bookTitle.append(book.title);
  bookAuthor.append(book.author);
  bookInfo.append(bookTitle, bookAuthor);

  const { bookmarkBtn, finishBtn, deleteBtn } = createButtons(book);

  const btnGroup = document.createElement('div');
  btnGroup.classList.add('btn-group');
  btnGroup.append(bookmarkBtn, finishBtn, deleteBtn);

  card.append(bookInfo, btnGroup);

  return card;
}

function createButtons(book) {
  const bookmarkBtn = document.createElement('button');
  const finishBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  bookmarkBtn.classList.add('btn-icon');
  finishBtn.classList.add('btn-icon');
  deleteBtn.classList.add('btn-icon');

  if (book.addToBookmark) bookmarkBtn.classList.add('green');
  if (book.isComplete) bookmarkBtn.classList.add('green');

  bookmarkBtn.append('B');
  finishBtn.append('F');
  deleteBtn.append('D');

  return { bookmarkBtn, finishBtn, deleteBtn };
}
