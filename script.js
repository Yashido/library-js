let form = document.getElementsByClassName("book-submition");
let bookTitle = document.getElementById("book-title").value;
let bookAuthor = document.getElementById("book-author").value;
let bookPages = document.getElementById("book-pages").value;
let bookProgress = document.getElementById("book-progress").value;

console.log(bookAuthor);

let myLibrary = [];

function Book(bookTitle, bookAuthor, bookPages, bookProgress) {
    this.bookTitle = bookTitle,
    this.bookAuthor = bookAuthor,
    this.bookPages = bookPages,
    this.bookProgress = bookProgress
};

/*
let x = 0;
while(x != 9999999999999) {
    console.log(author);
}
*/


function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookProgress) {
    myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookProgress));
    console.log(myLibrary[0]);
};
