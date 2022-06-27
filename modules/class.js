const bookTitle = document.getElementById('#title');
const bookAuthor = document.getElementById('#author');
const form = document.getElementById('#form');

function handleChange() {
    const formData = {
        title: bookTitle.value
    }
}

// export default class Bookcollection {
//     constructor(title, author, bookstore) {
//         this.title = title;
//         this.author = author;
//         this.bookstore = bookstore;
//     }
// }

// export function getData() {
//     const booklist = document.querySelector('.book-list')
//     let existingData = JSON.parse(localStorage.getItem('data'))
//     if (existingData == null) existingData = this.bookstore;

//     this.bookstore = this.bookstore.concat(existingData);

//     this.bookstore.forEach((item) => {
//         booklist.innerHTML += `
//         <li class="book" id="${item.title}">
//         <p> "${item.title}</p>
//         <p> "${item.author}"</p>
//         <button type="button" class"remove">Remove</button>
//         </li>`
//     })
// }

// export function saveData() {
//      console.log('form submit listener called now');
//     const booklist = document.querySelector('.book-list')
//     const form = document.querySelector('#form')
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const { title } = bookTitle.value;
//         const { author } = bookAuthor.value;

//         const bookDescription = {
//             title: bookTitle.value,
//             author: bookAuthor.value,
//         };

//         if (title.value.length && author.value.length > 0) {
//             this.bookstore.push(bookDescription)
//             localStorage.setItem('data', JSON.stringify(this.bookstore))
//         }
//     })
// }


