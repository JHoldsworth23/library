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

function validateForm(input) {
    return input.checkValidity();
}

function getBookInfo(event) {
    const bookTitle = document.querySelector('#title');
    const bookAuthor = document.querySelector('#author');
    const bookPages = document.querySelector('#pages');
    const bookRead = document.querySelector('input[type*="box"]');

    let allInputs = [bookTitle, bookAuthor, bookPages, bookRead];
    if (allInputs.every(validateForm)) {
        addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
        form.reset();
        event.preventDefault();
    }
}

const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelector('form');
submitBtn.addEventListener('click', getBookInfo);
