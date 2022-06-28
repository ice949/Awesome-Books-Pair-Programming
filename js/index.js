// const { object } = require("webidl-conversions");

// console.log('Index started');

const Books = [];
const BookList = [];


const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const form = document.getElementById('form');
const booklist = document.querySelector(".book-list")

// let formData = {
//     title: "",
//     author: "",
// };

// function handleChange() {
//     formData.title = bookTitle.value;
//     formData.author = bookAuthor.value;
//     localStorage.setItem('form', JSON.stringify(formData));
// }

// let formData = {
//     title: "",
//     author: "",
// };

// form.addEventListener('submit', () => {
//     const getFormValue = localStorage.getItem('form');
    
//     if (getFormValue) {
//         const formObject = JSON.parse(getFormValue);
//         bookTitle.value = formObject.title;
//         bookAuthor.value = formObject.author;
//     }

//     let titleName = getFormValue['title'];
//     let authorName = getFormValue['author'];
//     console.log(titleName + authorName);
//     console.log(formData);
//     Books.push(getFormValue);
//     localStorage.setItem('formd', JSON.stringify(getFormValue));
//     localStorage.getItem('formd');
//     console.log(getFormValue);
//     console.log(Books);
// });

// bookTitle.onkeyup = handleChange;
// bookAuthor.onkeyup = handleChange;

// form.addEventListener('submit', ()=> {
//     // const book = object.create(formData)

//     console.log(Books);
// });

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
