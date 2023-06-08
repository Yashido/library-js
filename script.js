const mainContainer = document.getElementsByClassName("main-container");
const dialog = document.getElementById("dialog-container");
let form = document.getElementsByClassName("book-submition");
const modalBtn = document.querySelector("#dialog-button");

const cancelBtn = document.querySelector("#form-cancel");
const submitBtn = document.querySelector("#form-submit");

let title = document.querySelector("#book-title").value;
let author = document.querySelector("#book-author").value;
let pages = document.querySelector("#book-pages").value;
let progresion = document.querySelector("#book-progress").value;


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

function bookCard(title, author, pages, progresion) {
    if ( title === title) {
        const mainContainer = document.getElementsByClassName("main-container");
        const newDiv = document.createElement("div");
            newDiv.classList.add("book-card-container")
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
        const bookPagesElement = document.createElement("h5");
        const bookPages = document.createTextNode(pages);
            bookPagesElement.classList.add("book-card-pages");
                newDiv.appendChild(bookPagesElement);
        const bookProgressElement = document.createElement("label")
        const bookProgressCheckboxElement = document.createElement("input")
            bookProgressCheckboxElement.setAttribute("type", "checkbox");
            bookProgressCheckboxElement.setAttribute(progresion);
                bookProgressElement.classList.add("book-card-progress");
                    newDiv.appendChild(bookProgressElement);
    } else {
        return console.log("Uh");
    }
}

function Book(title, author, pages, progresion) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.progression = progresion
};

function addBookToLibrary() {
    myLibrary.push(new Book(title, author, pages, progresion))
    
    console.log(myLibrary[0]);
};

function clearFormData() {
    document.querySelector("#book-title").value = "";
    document.querySelector("#book-author").value = "";
    document.querySelector("#book-pages").value = "";
    document.querySelector("#book-progress").value = "";
}



modalBtn.addEventListener("click",  showDialogModal, false);
function showDialogModal(event) {
    dialog.showModal();
    
}

/* Form cancel & submit */
submitBtn.addEventListener("click", formButtonClick, false);
    function formButtonClick(event) {
        event.preventDefault();
        addBookToLibrary();
        libraryBookIteration();
        
    };

cancelBtn.addEventListener("click", removeModal);
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