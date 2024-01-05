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
            div.classList.add('book-card');
            div.innerHTML = `
                <p class="book-title">${book.title.toUpperCase()} <br><span>by</span></p>
                <p class="book-author">${capitalize(book.author)}</p>
                <p>${book.pages} pages</p>
                <div>
                    <button class="read">${book.read ? '<i class="fa-solid fa-book-bookmark"></i> Read' : '<i class="fa-solid fa-book not-read"></i> Not Read'}</button>
                    <button class="delete"><i class="fa-solid fa-trash"></i></button>
                </div>
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

        const readBtn = document.querySelectorAll('.read');
        readBtn.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const currentBook = myLibrary[index].read;
                myLibrary[index].read = !currentBook;
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
    ? string.split(" ").map(text => text.length > 1 
        ? text[0].toUpperCase() + text.slice(1).toLowerCase() 
        : text[0].toUpperCase()).join(" ")
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
