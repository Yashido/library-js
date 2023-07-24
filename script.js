const mainContainer = document.getElementById("main-container");
const dialogContainer = document.getElementById("dialog-container");
const form = document.getElementById("book-submission-form");

const modalBtn = document.querySelector("#dialog-button");
const cancelBtn = document.querySelector("#form-cancel");
const submitBtn = document.querySelector("#form-submit");

let myLibrary = [
    {
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        pages: 300,
    },
    {
        title: "The Bobbit",
        author: "J. R. R. Tolkien",
        pages: 300,
    }
];

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}

function libraryIteration() {
    myLibrary.forEach((book) => {
        const existingBookCard = findBookCardByTitle(book.title);

        if (!existingBookCard) {
            bookCard(book.title, book.author, book.pages);
        } else {
            console.log("Book already exists!");
        }
    });
}

function findBookCardByTitle(title) {
    const bookCards = document.getElementsByClassName("book-card-title");
    for (let i = 0; i < bookCards.length; i++) {
        if (bookCards[i].textContent === title) {
            return bookCards[i].parentNode;
        }
    }
    return null;
}

function bookCard(title, author, pages) {
    const newDiv = document.createElement("div");
        newDiv.classList.add("book-card-container");
            mainContainer.appendChild(newDiv);
    const bookTitleElement = document.createElement("h4");
    const bookTitle = document.createTextNode(title);
        bookTitleElement.classList.add("book-card-title");
            newDiv.appendChild(bookTitleElement);
                bookTitleElement.appendChild(bookTitle);
    const bookAuthorElement = document.createElement("h5");
    const bookAuthor = document.createTextNode(author);
        bookAuthorElement.classList.add("book-card-author");
            newDiv.appendChild(bookAuthorElement);
                bookAuthorElement.appendChild(bookAuthor);
    const bookPagesElement = document.createElement("h5");
    const bookPages = document.createTextNode(pages);
            bookPagesElement.classList.add("book-card-pages");
                newDiv.appendChild(bookPagesElement);
                    bookPagesElement.appendChild(bookPages);
}

libraryIteration();
