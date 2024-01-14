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

    displayBooks(panel) {
        panel.innerHTML = '';
        if (this.myLibrary.length !== 0) {
            this.myLibrary.forEach(book => {
               const div = document.createElement('div');
               div.classList.add('book-card');
               div.innerHTML =  `
                   <p class="book-title">${book.title.toUpperCase()} <br><span>by</span></p>
                   <p class="book-author">${book.author}</p>
                   <p>${book.pages} pages</p>
                   <div>
                       <button class="read">${book.read ? '<i class="fa-solid fa-book-bookmark"></i> Read' : '<i class="fa-solid fa-book not-read"></i> Not Read'}</button>
                       <button class="delete"><i class="fa-solid fa-trash"></i></button>
                   </div> 
               `;
               panel.append(div);
            });
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
    library.displayBooks(grid);
}

showForm.addEventListener('click', () => {
    dialog.showModal();
})

submitBtn.addEventListener('click', addBook);

cancelBtn.addEventListener('click', () => {
    form.reset();
    dialog.close();
})