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

function displayBook(libraryArray) {
    if (libraryArray.length !== 0) {
        grid.innerHTML = '';
        libraryArray.forEach(book => {
            const div = document.createElement('div');
            div.innerHTML = `
                <p>${book.title}</p>
                <p>${book.author}</p>
                <p>${book.pages} pages</p>
                <button class="read">${book.read ? "Read" : "Not Read"}</button>
                <button class="delete">Delete</button>
            `;
            grid.appendChild(div);
        });
    }
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
        dialog.close();
        event.preventDefault();
        displayBook(myLibrary);
    }
}

const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelector('form');
submitBtn.addEventListener('click', getBookInfo);

const dialog = document.querySelector('dialog');
const showForm = document.querySelector('#add-book');
const cancelBtn = document.querySelector('#cancel-btn');
showForm.addEventListener('click', () => {
    dialog.showModal();
});

cancelBtn.addEventListener('click', () => {
    form.reset();
    dialog.close();
})

const grid = document.querySelector('.grid-container');
