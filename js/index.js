const Books = [];
var BookList = [];


const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const form = document.getElementById('form');
const booklist = document.querySelector(".book-list")

form.addEventListener('submit', callbackFunction);
function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);

    const formDataObj = {
        id: BookList.length,
        title: bookTitle.value,
        author: bookAuthor.value,
    };
    BookList.push(formDataObj);
    let list = document.createElement("li");
    list.classList.add('list')
    list.id = BookList.length - 1;
    list.innerHTML = `
    <p class="book-id">${formDataObj.id}</p>
    <p id='test'>${formDataObj['title']}</p>
    <p>${formDataObj['author']}</p>
    <button type="button" id="${BookList.length - 1}" class="remove">Remove</button>
    <br> <hr />
    `
    booklist.appendChild(list)
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
    console.log(BookList);

    const removeBtn = document.querySelectorAll('.remove');
    // removeBtn.onclick = () => {
    //     BookList.splice(removeBtn.id, 1);
    //     console.log(BookList);
    // };
    console.log(removeBtn[0].id);
    for (var i = 0; i < removeBtn.length; i++) {

        removeBtn[i].addEventListener('click', () => {
            BookList = BookList.splice(removeBtn[i].id, 1);
            console.log(BookList);
        })
    }

};
