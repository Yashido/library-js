const dialog = document.getElementById("dialog-container");
let form = document.getElementsByClassName("book-submition");
const modalBtn = document.querySelector("#dialog-button");

const cancelBtn = document.querySelector("#form-cancel");
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
    console.log(myLibrary[0]);
};

function clearFormData() {
    
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
        
    };

cancelBtn.addEventListener("click", removeModal);
    function removeModal(event) {
        event.preventDefault();
        dialog.close();
    
    }

modalBtn.addEventListener("click", () => {
    const dialogDimensions = modal.getBoundingClientRect()
    if(
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close()
    }
});