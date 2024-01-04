const myLibrary = [];
const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelector('form');
const dialog = document.querySelector('dialog');
const showForm = document.querySelector('#add-book');
const cancelBtn = document.querySelector('#cancel-btn');
const grid = document.querySelector('.grid-container');

submitBtn.addEventListener('click', getBookInfo);

showForm.addEventListener('click', () => {
    dialog.showModal();
});

cancelBtn.addEventListener('click', () => {
    form.reset();
    dialog.close();
})

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

function displayBook() {
    grid.innerHTML = '';
    if (myLibrary.length !== 0) {
        myLibrary.forEach(book => {
            const div = document.createElement('div');
            div.innerHTML = `
                <p>${book.title.toUpperCase()}</p>
                <p>${capitalize(book.author)}</p>
                <p>${book.pages} pages</p>
                <button class="read">${book.read ? "Read" : "Not Read"}</button>
                <button class="delete">Delete</button>
            `;     
            grid.appendChild(div);
        });

        const deleteBtn = document.querySelectorAll('.delete');
        deleteBtn.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                myLibrary.splice(index, 1);
                displayBook();
            });
        });
    }
}

function validateForm(input) {
    return input.checkValidity();
}

function capitalize(string) {
    return string.split(" ").length >= 2 
    ? string.split(" ").map(text => text[0].toUpperCase() + text.slice(1).toLowerCase()).join(" ")
    : string[0].toUpperCase() + string.slice(1).toLowerCase();
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
        displayBook();
    }
}
