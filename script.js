const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function clearForm() {
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(input => console.log(input));
}

function getBookInfo(event) {
    event.preventDefault();
    const bookTitle = document.querySelector('#title');
    const bookAuthor = document.querySelector('#author');
    const bookPages = document.querySelector('#pages');
    const bookRead = document.querySelector('input[type*="box"]');

    if (form.checkValidity()) {
        addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
        clearForm();
    }
}

const submitBtn = document.querySelector('button');
const form = document.querySelector('form');
submitBtn.addEventListener('click', getBookInfo);
