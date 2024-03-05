class Book {
    constructor(title, author, pages, read) {
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

    removeBook() {
        const deleteBtn = document.querySelectorAll('.delete');
        deleteBtn.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.myLibrary.splice(index, 1);
                this.displayBooks();
            })
        })
    }

    toggleStatus() {
        const readBtn = document.querySelectorAll('.read');
        readBtn.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const currentBook = this.myLibrary[index].read;
                this.myLibrary[index].read = !currentBook;
                this.displayBooks();
            });
        });
    }

    capitalize(string) {
        return string.split(" ").length >= 2 
        ? string.split(" ").map(text => text.length > 1 
            ? text[0].toUpperCase() + text.slice(1).toLowerCase() 
            : text[0].toUpperCase()).join(" ")
        : string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
 
    displayBooks() {
        grid.innerHTML = '';
        if (this.myLibrary.length !== 0) {
            this.myLibrary.forEach(book => {
               const div = document.createElement('div');
               div.classList.add('book-card');
               div.innerHTML =  `
                   <p class="book-title">${book.title.toUpperCase()} <br><span>by</span></p>
                   <p class="book-author">${this.capitalize(book.author)}</p>
                   <p>${book.pages} pages</p>
                   <div>
                       <button class="read">${book.read ? '<i class="fa-solid fa-book-bookmark"></i> Read' : '<i class="fa-solid fa-book not-read"></i> Not Read'}</button>
                       <button class="delete"><i class="fa-solid fa-trash"></i></button>
                   </div> 
               `;
               grid.append(div);
            });

            this.removeBook();
            this.toggleStatus();
        }
    }
}

const library = new Library();

const showForm = document.querySelector('#add-book');
const form = document.querySelector('form');
const dialog = document.querySelector('dialog');
const submitBtn = document.querySelector('#submit-btn');
const cancelBtn = document.querySelector('#cancel-btn');
const grid = document.querySelector('.grid-container');

const getBookInfo = () => {
    const bookTitleInput = document.querySelector('#title');
    const titleError = document.querySelector('#title + span');
    const bookAuthorInput = document.querySelector('#author');
    const authorError = document.querySelector('#author + span');
    const bookPagesInput = document.querySelector('#pages');
    const pageError = document.querySelector('#pages + span');
    const bookRead = document.querySelector('input[type*="box"]').value;

    if ( bookTitleInput.validity.valueMissing ) {
        titleError.textContent = 'You need to add the book title';
    } else {
        titleError.textContent = '';
    }

    if ( bookAuthorInput.validity.valueMissing ) {
        authorError.textContent = "You need to add the author's name";
    } else {
        authorError.textContent = '';
    }

    if ( bookAuthorInput.validity.valueMissing ) {
        authorError.textContent = "You need to add the author's name";
    } else {
        authorError.textContent = '';
    }

    if ( bookPagesInput.validity.valueMissing ) {
        pageError.textContent = 'You need to add the value for book pages';
    } else if ( bookPagesInput.validity.rangeOverflow ) {
        pageError.textContent = 'Book pages need to be under 2001';
    } else if ( bookPagesInput.validity.rangeUnderflow ) {
        pageError.textContent = 'Book pages need to be over 1';
    } else {
        pageError.textContent = '';
    }

    return new Book(bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value, bookRead);
}

const addBook = (event) => {
    event.preventDefault();
    const form = document.querySelector('form');
    const newBook = getBookInfo();
    if (form.checkValidity()) {
        library.addBookToLibrary(newBook);
        form.reset();
        dialog.close();
        library.displayBooks(grid);
    }
}

showForm.addEventListener('click', () => {
    dialog.showModal();
})

submitBtn.addEventListener('click', addBook);

cancelBtn.addEventListener('click', () => {
    form.reset();
    dialog.close();
});

const copyright = document.querySelector('.copyright');
const date = new Date();
copyright.textContent = `Copyright © ${date.getFullYear()} JHoldsworth23`;