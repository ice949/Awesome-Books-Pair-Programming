console.log('Index started');

// import Bookcollection from "../modules/class.js";
// import { getData, saveData } from "../modules/class.js";

const Books = [];


const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const form = document.getElementById('form');

bookTitle.onchange = function () {
    console.log(bookTitle.value);
}

bookAuthor.onchange = function () {
    console.log(bookAuthor.value);
}

function handleChange() {
    const formData = {
        title: bookTitle.value,
        author: bookAuthor.value,
    };

    localStorage.setItem('form', JSON.stringify(formData));
}


document.addEventListener('DOMContentLoaded', () => {
    const getFormValue = localStorage.getItem('form');
    console.log(getFormValue);
    if (getFormValue) {
        const formObject = JSON.parse(getFormValue);
        bookTitle.value = formObject.title;
        bookAuthor.value = formObject.author;
    }
});

bookTitle.onkeyup = handleChange;
bookAuthor.onkeyup = handleChange;