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

class CreateUI{
  getUI(localStorage){
    this.books = localStorage.getLocalStorage();
  }

  createUI(books){
    const list = document.createElement("div");
    list.classList.add("single-book");

    const title = document.createElement("h3");
    title.textContent = book.title;
    title.classList.add("title");
    list.appendChild(title);

    const author = document.createElement("h3");
    author.textContent = book.author;
    author.classList.add("author");
    list.appendChild(author);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("type", "button");
    list.appendChild(removeBtn);

    const bar = document.createElement("hr");
    bar.classList.add("bar");
    list.appendChild(bar);

    // adding book to ul
    bookContainer.append(list);

  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new AwesomeBooks(bookTitle.value, bookAuthor.value);
  const localStorage = new LocalStorage();
  localStorage.setStorage(book);
  console.log(localStorage.getLocalStorage());
});