const mainContainer = document.getElementsByClassName("main-container");
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
    }
];

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
};

function libraryIteration() {
    myLibrary.forEach((book) => {
        const existingBookCard = findBookCardByTitle(book.title);

        if(!existingBookCard) {
            bookCard(book.title, book.author, book.pages);
        } else {
          alert("Book already exist!");
        }
    });
};

function findBookCardByTitle(title) {
    const bookCards = document.getElementsByClassName("book-card-title");
        for (let i = 0; i < bookCards.length; i++) {
            if (bookCards[i].textContent === title) {
                return bookCards[i].parentNode;
                }
            }
                return null;
  }


function bookCard(title, author, pages, progression) {
    const newDiv = document.createElement("div");
        mainContainer.appendChild("newDiv");
};

libraryIteration();