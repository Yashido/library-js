const mainContainer = document.getElementsByClassName("main-container")[0];
const dialog = document.getElementById("dialog-container");
let form = document.getElementsByClassName("book-submition");
const modalBtn = document.querySelector("#dialog-button");

const cancelBtn = document.querySelector("#form-cancel");
const submitBtn = document.querySelector("#form-submit");

let myLibrary = [ 
    {
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        pages: 300,
        progression: true
    }
];

function libraryBookIteration() {
    myLibrary.forEach((book) => bookCard(book.title, book.author, book.pages, book.progression));
}

function bookCard(title, author, pages, progression) {
        const newDiv = document.createElement("div");
            newDiv.classList.add("book-card-container");
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
        const bookProgressElement = document.createElement("label");
        const bookProgressCheckboxElement = document.createElement("input");
            bookProgressCheckboxElement.setAttribute("type", "checkbox");
                bookProgressCheckboxElement.setAttribute("value", progression);
                    bookProgressElement.classList.add("book-card-progress");
                        newDiv.appendChild(bookProgressElement);
                            bookProgressElement.appendChild(bookProgressCheckboxElement);
    
};


function Book(title, author, pages, progression) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.progression = progression
};

function addBookToLibrary() {
    let title = document.querySelector("#book-title").value;
    let author = document.querySelector("#book-author").value;
    let pages = document.querySelector("#book-pages").value;
    let progression = document.querySelector("#book-progress").value;
    myLibrary.push(new Book(title, author, pages, progression));
    bookCard(title, author, pages, progression);
    console.log(myLibrary[myLibrary.length - 1]);
}

function clearFormData() {
    document.querySelector("#book-title").value = "";
    document.querySelector("#book-author").value = "";
    document.querySelector("#book-pages").value = "";
    document.querySelector("#book-progress").value = "";
}

modalBtn.addEventListener("click", showDialogModal);

function showDialogModal(event) {
    dialog.showModal();
    submitBtn.addEventListener("click", formButtonClick, false);
    cancelBtn.addEventListener("click", removeModal, false);
}

function formButtonClick(event) {
    event.preventDefault();
    addBookToLibrary();
    libraryBookIteration();
    clearFormData();
}

function removeModal(event) {
    event.preventDefault();
    dialog.close();
}

dialog.addEventListener("click", (e) => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if(
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialog.close()
    }
});