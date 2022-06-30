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

// booksArray to store array of object
let books = [];

// Create a js Object to store form data
const formData = {
  title: '',
  author: '',
};

function removeElementFromUI(target) {
  if (target.classList.contains('remove-btn')) {
    target.parentElement.remove();
  }
}

function removeFromBooks(title) {
  let tempBooks;
  if (localStorage.getItem('books') === null) {
    tempBooks = [];
  } else {
    tempBooks = JSON.parse(localStorage.getItem('books'));
    tempBooks.forEach((book, index) => {
      if (book.title === title) {
        tempBooks.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(tempBooks));
      }
    });
  }
}

// display data in the browser
function displayBook(index) {
  const list = document.createElement('div');
  list.classList.add('single-book');

  const title = document.createElement('h3');
  title.textContent = books[index].title;
  title.classList.add('title');
  list.appendChild(title);

  const author = document.createElement('h3');
  author.textContent = books[index].author;
  author.classList.add('author');
  list.appendChild(author);

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = 'Remove';
  removeBtn.setAttribute('type', 'button');
  list.appendChild(removeBtn);

  const bar = document.createElement('hr');
  bar.classList.add('bar');
  list.appendChild(bar);

  // adding book to ul
  bookContainer.append(list);

  // add event listener to removeBtn
  list.addEventListener('click', (e) => {
    // bookContainer.removeChild(list);
    // books.splice(list.childNodes[0].innerText, 1);
    removeElementFromUI(e.target);
    removeFromBooks(e.target.parentElement.firstChild.textContent);
  });
}

// Event listner for form on submit event
form.addEventListener('submit', (e) => {
  formData.title = bookTitle.value;
  formData.author = bookAuthor.value;
  books.push(formData);
  displayBook(books.length - 1);
  e.preventDefault();
  localStorage.setItem('books', JSON.stringify(books));
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
});

// event listener for doucment on cotent loaded
document.addEventListener('DomContentLoaded', () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
});