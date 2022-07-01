/* eslint-disable max-classes-per-file */
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookContainer = document.querySelector('.book-list');
const form = document.getElementById('form');

class AwesomeBooks {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class LocalStorage {
  // eslint-disable-next-line class-methods-use-this
  getLocalStorage() {
    let books;
    if (localStorage.getItem('books') == null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  setStorage(book) {
    const books = this.getLocalStorage();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  removeBookFromStorage(title) {
    const books = this.getLocalStorage();
    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

class CreateUI {
  getUI(localStorage) {
    this.books = localStorage.getLocalStorage();
    let counter = 0;
    while (counter < this.books.length) {
      this.addToUI(this.books[counter]);
      counter += 1;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  addToUI(book) {
    const list = document.createElement('div');
    list.classList.add('single-book');

    const info = document.createElement('div');
    info.classList.add('info');
    list.appendChild(info);

    const title = document.createElement('h3');
    title.textContent = book.title;
    title.classList.add('title');
    info.appendChild(title);

    const by = document.createElement('h3');
    by.textContent = 'by';
    info.appendChild(by);

    const author = document.createElement('h3');
    author.textContent = (book.author);
    author.classList.add('author');
    info.appendChild(author);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('type', 'button');
    list.appendChild(removeBtn);

    list.addEventListener('click', (e) => {
      this.remove(e.target);
      // eslint-disable-next-line no-use-before-define
      localS.removeBookFromStorage(e.target.parentElement.firstChild.firstChild.textContent);
    });

    // adding book to ul
    bookContainer.append(list);
  }

  // eslint-disable-next-line class-methods-use-this
  remove(t) {
    if (t.classList.contains('remove-btn')) {
      t.parentElement.remove();
    }
  }
}

const localS = new LocalStorage();
const ui = new CreateUI();

function getVal(title, author) {
  return new AwesomeBooks(title, author);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add new book to local storage
  localS.setStorage(getVal(bookTitle.value, bookAuthor.value));

  // create a new book in DOM
  ui.addToUI(getVal(bookTitle.value, bookAuthor.value));
});

window.addEventListener('load', ui.getUI(localS));
