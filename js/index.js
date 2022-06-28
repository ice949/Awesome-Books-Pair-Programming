// const { object } = require("webidl-conversions");

// console.log('Index started');

const Books = [];
const BookList = [];


const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const form = document.getElementById('form');
const booklist = document.querySelector(".book-list")

form.addEventListener('submit', callbackFunction);
function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);

    const formDataObj = {
        title: bookTitle.value,
        author: bookAuthor.value,
    };
    BookList.push(formDataObj); 
    let list = document.createElement("li");
    list.classList.add('list')
    list.innerHTML = `<p>${formDataObj['title']}</p>
    <p>${formDataObj['author']}</p>
    <button type="button" class="${BookList.length}">Remove</button>`
    booklist.appendChild(list)                  
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
    console.log(BookList);
};
