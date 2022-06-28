console.log('Index started');

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

let formData = {
    title: "",
    author: "",
};

function handleChange() {
    formData.title = bookTitle.value;
    formData.author =bookAuthor.value;
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

form.addEventListener('submit', ()=> {
    Books.push(formData);

    console.log(Books);
});