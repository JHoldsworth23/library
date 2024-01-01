const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read === 'on' ? true : false;
}

function addBookToLibrary() {
    // do stuff here...
}

const submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const bookDetails = Array.from(document.querySelectorAll('input'));
    console.log(bookDetails)
});
