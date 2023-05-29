let form = document.getElementsByClassName("book-submition");
const submitBtn = document.querySelector("#form-submit");

let title = document.querySelector("#book-title").value;
let author = document.querySelector("#book-author").value;
let pages = document.querySelector("#book-pages").value;
let progresion = document.querySelector("#book-progress").value;


let myLibrary = [];

function Book(title, author, pages, progresion) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.progression = progresion
};



function addBookToLibrary() {
    myLibrary.push(new Book(title, author, pages, progresion))
    console.log(myLibrary[]);
};

/* Form submit */

submitBtn.addEventListener("click", formButtonClick, false);

function formButtonClick(event) {
    event.preventDefault();

}