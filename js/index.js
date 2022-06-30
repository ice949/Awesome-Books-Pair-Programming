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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new AwesomeBooks(bookTitle.value, bookAuthor.value);
  const localStorage = new LocalStorage();
  localStorage.setStorage(book);
  console.log(localStorage.getLocalStorage());
});