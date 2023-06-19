const mainContainer = document.getElementsByClassName("main-container")[0];
const dialog = document.getElementById("dialog-container");
let form = document.getElementsByClassName("book-submission");
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
    myLibrary.forEach((book) => {
      const existingBookCard = findBookCardByTitle(book.title);
      if (!existingBookCard) {
        bookCard(book.title, book.author, book.pages, book.progression);
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
  

function bookCard(title, author, pages, progression) {
        const newDiv = document.createElement("div");
            newDiv.classList.add("book-card-container");
            newDiv.classList.add("data-" + title)
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

bookProgressCheckboxElement.addEventListener("change", (event) => {
    const isChecked = event.target.checked;
    const formCheckbox = document.querySelector("#book-progress");
        if(formCheckbox.checked = isChecked) {
            for(let x = 0; i < cardContainers.length; i++) {
                if(cardTitle === title) {
                    formCheckbox.classList.add("checked")
                } else {
                    return;
                }
            }
        } else {
            return;
        }
        formCheckbox.checked = isChecked;

});


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
};

function clearFormData() {
    document.querySelector("#book-title").value = "";
    document.querySelector("#book-author").value = "";
    document.querySelector("#book-pages").value = "";
    document.querySelector("#book-progress").value = "";
};

modalBtn.addEventListener("click", showDialogModal);
submitBtn.addEventListener("click", formButtonClick);
cancelBtn.addEventListener("click", removeModal);

function showDialogModal(event) {
    dialog.showModal();
    submitBtn.addEventListener("click", formButtonClick, { once: true });
    cancelBtn.addEventListener("click", removeModal, { once: true });
};

function formButtonClick(event) {
    event.preventDefault();
    addBookToLibrary();
    libraryBookIteration();
    clearFormData();
    console.log("Dialog should close")
    dialog.close();
};

function removeModal(event) {
    event.preventDefault();
    dialog.close();
};

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

function removeBook(title) {
    const cardContainers = document.getElementsByClassName("book-card-container");
    for (let i = 0; i < cardContainers.length; i++) {
      const card = cardContainers[i];
      const cardTitle = card.querySelector(".book-card-title").textContent;
      if (cardTitle === title) {
        card.remove();
        break;
      }
    }
    myLibrary = myLibrary.filter((book) => book.title !== title);
  }
  