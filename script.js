let myLibrary = ["Harry Potter", "Pride and Prejudice", "To Kill A MonkeyBird", "The Alchemist", "Case Closed",
];
let myAuthor = ["JK ROWLING","Jane Austin","Harper Lee","The Science","Phoenix Wright"]
let myPage = ["500","300","200","90","50"]

function Book(author, title, pages) {
  this.author = author
  this.title = title
  this.pages = pages
}
let add = document.querySelector("input")


function addBookToLibrary() {
container.innerHTML = ""
// Can i just use the values of input Text?
let title = prompt("book Title Please!")
let author = prompt("author Name")
let pages = prompt("page number")
myLibrary.push(title)
myAuthor.push(author)
myPage.push(pages)
for(let i = 0; i < myLibrary.length; i++){ 
  div = document.createElement('div')
  div.style.cssText = "display:flex; margin: 5px; border: black 10px solid; background-color: blue; text-align: center; justify-content: center; align-items: center;"
  div.textContent = myLibrary[i] + ", " + myAuthor[i]+ ", " + myPage[i]
  container.appendChild(div)
  }
  
}


add.onclick = function(){
  addBookToLibrary()
}



let container = document.querySelector("#container")
container.style.cssText = "display:flex; flex-direction: column;"

for(let i = 0; i < myLibrary.length; i++){ 
div = document.createElement('div')
div.style.cssText = "display:flex; margin: 5px; border: black 10px solid; background-color: blue; text-align: center; justify-content: center; align-items: center;"
div.textContent = myLibrary[i] + ", " + myAuthor[i]+ ", " + myPage[i]
container.appendChild(div)
}
