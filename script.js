let form = document.getElementsByClassName("book-submition");
let bookTitle = document.getElementById("book-title").value;
let bookAuthor = document.getElementById("book-author").value;
let bookPages = document.getElementById("book-pages").value;
let bookProgress = document.getElementById("book-progress").value;

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

/*
let x = 0;
while(x != 9999999999999) {
    console.log(author);
}
*/


function addBookToLibrary() {
    myLibrary.push(new Book(title, author, pages, progresion))
    console.log(myLibrary[0]);
};
