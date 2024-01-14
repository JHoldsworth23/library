// Rewrite these code with the use of Class
class Book {
    constructor(title = 'Unknown', author = 'Unknown', pages = '0', read = false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
    }

    addBookToLibrary(newBook) {
        this.myLibrary.push(newBook);
    }
}

const library = new Library();

const showForm = document.querySelector('#add-book');
const form = document.querySelector('form');
const dialog = document.querySelector('dialog');
const submitBtn = document.querySelector('#submit-btn');
const cancelBtn = document.querySelector('#cancel-btn');

const getBookInfo = () => {
    const bookTitle = document.querySelector('#title').value;
    const bookAuthor = document.querySelector('#author').value;
    const bookPages = document.querySelector('#pages').value;
    const bookRead = document.querySelector('input[type*="box"]').checked;

    return new Book(bookTitle, bookAuthor, bookPages, bookRead);
}

const addBook = (event) => {
    event.preventDefault();
    const newBook = getBookInfo();
    library.addBookToLibrary(newBook);
    form.reset();
    dialog.close();
}

showForm.addEventListener('click', () => {
    dialog.showModal();
})

submitBtn.addEventListener('click', addBook);

cancelBtn.addEventListener('click', () => {
    form.reset();
    dialog.close();
})