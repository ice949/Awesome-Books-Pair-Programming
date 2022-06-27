export default class Bookcollection {
    constructor(title, author, bookstore) {
        this.title = title;
        this.author = author;
        this.bookstore = bookstore;
    }
}

function existingData() {
    const booklist = document.querySelector('.book-list')
    let existingData = JSON.parse(localStorage.getItem('data'))
    if (existingData == null) existingData = this.bookstore;

    this.bookstore = this.bookstore.concat(existingData);

    this.bookstore.forEach((item) => {
        booklist.innerHTML += `
        <li class="book" id="${item.title}">
        <p> "${item.title}</p>
        <p> "${item.author}"</p>
        <button type="button" class"remove">Remove</button>
        </li>`
    })
}

function saveData() {
    const booklist = document.querySelector('.book-list')
    const form = document.querySelector('#form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const { title } = this;
        const { author } = this;

        const bookDescription = {
            title: title.value,
            author: author.value,
        };

        if (title.value.length && author.value.length > 0) {
            this.bookstore.push(bookDescription)
            localStorage.setItem('data', JSON.stringify(this.bookstore))
        }
    })
}