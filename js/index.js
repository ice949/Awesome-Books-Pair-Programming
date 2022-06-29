var books = [];

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookContainer = document.querySelector(".book-list")
const form = document.getElementById('form');

const formData = {
    title: '',
    author: '',
};

form.addEventListener('submit', (e) => {
    e.preventDefault
    formData.title = bookTitle.value;
    formData.author = bookAuthor.value;
    localStorage.setItem('form', JSON.stringify(formData));
    console.log(formData);
});















// form.addEventListener('submit', callbackFunction);
// function callbackFunction(event) {
//     event.preventDefault();
//     const myFormData = new FormData(event.target);

//     const formDataObj = {
//         id: BookList.length,
//         title: bookTitle.value,
//         author: bookAuthor.value,
//     };
//     BookList.push(formDataObj);
//     let list = document.createElement("li");
//     list.classList.add('list')
//     list.id = BookList.length - 1;
//     list.innerHTML = `
//     <p class="book-id">${formDataObj.id}</p>
//     <p id='test'>${formDataObj['title']}</p>
//     <p>${formDataObj['author']}</p>
//     <button type="button" id="${BookList.length - 1}" class="remove">Remove</button>
//     <br> <hr />
//     `
//     booklist.appendChild(list)
//     myFormData.forEach((value, key) => (formDataObj[key] = value));
//     console.log(formDataObj);
//     console.log(BookList);

//     const removeBtn = document.querySelectorAll('.remove');

//     console.log(removeBtn[0].id);
//     for (var i = 0; i < removeBtn.length; i++) {
//         removeBtn[i].addEventListener('click', () => {
//             BookList = BookList.splice(removeBtn[i].id, 1);
//             console.log(BookList);
//         })
//     }

// };
