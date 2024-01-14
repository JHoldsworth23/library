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

const book = new Book('Dune', 'Frank Herbert', '452', true);
const library = new Library();

library.addBookToLibrary(book);
console.log(library.myLibrary);