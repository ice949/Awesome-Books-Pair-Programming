const books = [];

let errorMessage = document.getElementById('error-message');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookContainer = document.querySelector(".book-list")
const form = document.getElementById('form');

// Create a js Object to store form data
const formData = {
    id: '',
    title: '',
    author: '',
};


// Event listner for form on submit event
form.addEventListener('submit', (e) => {
    e.preventDefault
    formData.title = bookTitle.value;
    formData.author = bookAuthor.value;
    formData.id = books.length;
    localStorage.setItem('form', JSON.stringify(formData));
    pushIntoBook(formData);
    displayBook(books.length - 1);
});


// event listener for doucment on cotent loaded
document.addEventListener('DOMContentLoaded', (e) => {
    if (localStorage.getItem('form')) {
        const formObj = JSON.parse(localStorage.getItem('form'));
        bookTitle.value = formObj.title;
        bookAuthor.value = formObj.author;
    }
});


// function to push form data object to book array
function pushIntoBook(formData) {
    books.push(formData);
    console.log(books);
}

// display data in the browser
function displayBook(index) {
    const list = document.createElement('div');
    list.classList.add('single-book');

    const id = document.createElement('h3');
    id.textContent = books[index].id;
    id.classList.add('book-id');
    list.appendChild(id);

    const title = document.createElement('h3');
    title.textContent = books[index].title;
    list.appendChild(title);

    const author = document.createElement('p');
    author.textContent = books[index].author;
    list.appendChild(author);

    removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';
    list.appendChild(removeBtn);

    //adding book to ul
    bookContainer.append(list);

    // add event listener to removeBtn
    removeBtn.addEventListener('click', () => {
        bookContainer.removeChild(list);
    });
}
