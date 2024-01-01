const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read === 'on' ? true : false;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const submitBtn = document.querySelector('button');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const bookTitle = document.querySelector('#title');
    const bookAuthor = document.querySelector('#author');
    const bookPages = document.querySelector('#pages');
    const bookRead = document.querySelector('input[type*="box"]');

    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
});
