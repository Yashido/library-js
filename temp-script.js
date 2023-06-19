const mainContainer = document.getElementsByClassName("main-container");

const dialogContainer = document.getElementById("dialog-container");
const form = document.getElementsByClassName("book-submission");

const modalBtn = document.querySelector("dialog-button");
const cancelBtn = document.querySelector("#form-cancel");
const submitBtn = document.querySelector("#form-submit");


let myLibrary = [];

let libraryIndex = currentLibraryIndex;
let currentLibraryIndex = myLibrary.length;

function libraryIndexCounter() {
    if(myLibrary.length === '') {
        return 0;
    } else if(myLibrary != 0) {
        return libraryIndex++;
    }
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

//Book construct
function Book(title, author, pages, progression, currentLibraryIndex) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.progression = progression,
    this.index = currentLibraryIndex
};

function libraryBookIteration() {
    myLibrary.forEach((book) => {
      const existingBookCard = findBookCardByTitle(book.title);
      if (!existingBookCard) {
        bookCard(book.title, book.author, book.pages, book.progression);
      } else {
        alert("Book already exist!");
      }
    });
  };

  function bookCard(title, author, pages, progression) {
    const newDiv = document.createElement("div");
        newDiv.classList.add("book-card-container");
        newDiv.classList.add("data-Index=" + "\"" + libraryIndexAddition + "\"");
            mainContainer.appendChild(newDiv);
    const bookTitleElement = document.createElement("h5");
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
    const bookCardDiv = document.createElement("div");
    bookCardDiv.classList.add("book-card-progress")
        newDiv.appendChild(bookCardDiv);
    const bookProgressLabelElement = document.createElement("h5");
        bookProgressLabelElement.classList.add("book-card-read");
            bookProgressLabelElement.appendChild(document.createTextNode("Read"));
                bookCardDiv.appendChild(bookProgressLabelElement);

    const bookProgressElement = document.createElement("label");
        bookProgressElement.classList.add("book-card-progress-switch");
    const bookProgressCheckboxElement = document.createElement("input");
        bookProgressCheckboxElement.setAttribute("type", "checkbox");

            bookProgressCheckboxElement.setAttribute(progression);
                bookProgressElement.classList.add("book-card-progress");
                    bookCardDiv.appendChild(bookProgressElement);
                        bookProgressElement.appendChild(bookProgressCheckboxElement);
    const bookProgressCheckboxSpan = document.createElement("span");
            

};

function formButtonClick(event) {
    event.preventDefault();
    addBookToLibrary();
    libraryBookIteration();
    clearFormData();
    console.log("Dialog should close")
    dialog.close();
};
