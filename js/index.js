var books = [];

let errorMessage = document.getElementById('error-message');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookContainer = document.querySelector(".book-list")
const form = document.getElementById('form');

// Create a js Object to store form data
const formData = {
    title: '',
    author: '',
};


// Event listner for form on submit event
form.addEventListener('submit', (e) => {
    e.preventDefault
    formData.title = bookTitle.value;
    formData.author = bookAuthor.value;
    localStorage.setItem('form', JSON.stringify(formData));
    pushIntoBook(formData);
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

// Check for empty or null fields
// function checkEmpty(e) {
//     let message = [];
//     if (bookTitle.value === '' || bookAuthor.value === '') {
//         message.push('Kindly fill in all fields !')
//         errorMessage.innerText = message.join(', ');
//         e.preventDefault();
//     }
// }
