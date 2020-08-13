// Example with six books
let myLibrary = 
["Harry Potter", "Pride and Prejudice", "To Kill A MonkeyBird", "The Alchemist", "Case Closed"];

let myAuthor = 
["JK ROWLING","Jane Austin","Harper Lee","The Science","Phoenix Wright"];

let myPage = 
["500","300","200","90","50"];

let container = document.querySelector("#container")

container.style.cssText = "display:flex; flex-direction: column;"

for(let i = 0; i < myLibrary.length; i++)
{ 
  div = document.createElement('div')
  let remove = document.createElement("input")
  remove.className = "remove"
  remove.setAttribute("type","button")
  remove.setAttribute("value","remove")
  div.style.cssText = "display:flex; margin: 5px; padding: 10px; border: black 10px solid; background-color: blue; text-align: center; justify-content: center; align-items: center; font-size: 30px"
 
  div.textContent = myLibrary[i] + ", " + myAuthor[i]+ ", " + myPage[i]
  container.appendChild(div)
  div.appendChild(remove)
}

// Attempt of Prototype Use
function Book(author, title, pages) 
{
  this.author = author
  this.title = title
  this.pages = pages
}

// Adding Books to Container
let add = document.getElementById("Add")


function addBookToLibrary() 
{
  
  container.innerHTML = ""

  

  let title = prompt("book Title Please!")
  let author = prompt("author Name")
  let pages = prompt("page number")

  myLibrary.push(title)
  myAuthor.push(author)
  myPage.push(pages)

  for(let i = 0; i < myLibrary.length; i++)
    { 
      div = document.createElement('div')
      let remove = document.createElement("input")
      remove.className = "remove"
      remove.setAttribute("type","button")
      remove.setAttribute("value","remove")
      div.style.cssText = "display:flex; margin: 5px; padding: 10px; border: black 10px solid; background-color: blue; text-align: center; justify-content: center; align-items: center; font-size: 30px"
     
      div.textContent = myLibrary[i] + ", " + myAuthor[i]+ ", " + myPage[i]
      container.appendChild(div)
      div.appendChild(remove)
      
    } 
    
}

add.onclick = function()
{
  addBookToLibrary()
}

// Remove Book
let remove = document.getElementById("Remove")



