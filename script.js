// My idea, going to use CSS grid to make cards, each card will be influnced by adding more divs based on how much books are made.
// Calling a book would show Book cover, pages, Author,genre
// Adding A Book will require the Book name, as well as any detail you already know.
// First, lets make the grid.
// Successfully made a grid, will be easy to adjust it of adding more. Can be done with a .length maybe, can do an array to just get the number value of book names, then create the grid that way.
let grid = document.querySelector("#container")
grid.style.cssText = "background-color:red; height: 300px; display:grid; grid-template-rows: repeat(2,1fr); grid-template-columns: repeat(2,1fr); grid-gap: 10px; justify-Content: center; text-align:center; align-items:center"
for(let i= 0; i < 4; i++){
let a = document.createElement('div');
 a.style.cssText = "display:grid"
 a.className = "grid"
grid.appendChild(a)
}
function Book(author, title, pages) {
  this.author = author
  this.title = title
  this.pages = pages
}

let add = document.getElementById("Add")
add.onclick = function(){
let promptTitle = prompt("Title Name")
let promptAuthor = prompt("Author")
let promptPages = prompt("Page number")
let newBook = new Book(`${promptTitle}`,`${promptAuthor}`,`${promptPages}`)
for(let i = 0; i < 4; i++){
container = document.querySelector("container")
div = document.getElementsByClassName("grid")
  if( div.textContent == ""){
  div[i].textContent = `${newBook.author}`
  }
  
  else if (div.textContent != ""){
    div[i++].textContent = `${newBook.author}`
  }
}
}





function addBookToLibrary() {
  // do stuff here
}


let myLibrary = {author: "JK Rowling",
Title: "Harry Potter"
};




