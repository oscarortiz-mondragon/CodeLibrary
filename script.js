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

  let remove = document.createElement('i')
  remove.className = "fas fa-trash"
  remove.id = "remove"
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

  

  let title = document.getElementById("Title").value
  let author = document.getElementById("Author").value
  let pages = document.getElementById("Pages").value

  myLibrary.push(title)
  myAuthor.push(author)
  myPage.push(pages)

  for(let i = 0; i < myLibrary.length; i++)
    { 
      div = document.createElement('div')
      let remove = document.createElement('i')
      remove.className = "fas fa-trash"
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


// To Delete Book
for(let i = 0; i < myLibrary.length; i++){
let touch = document.querySelector("#remove")
touch.addEventListener("click",function(){
  for(let j = 0; j < myLibrary.length; j++)
  div[j].innerHTML = ""
})
}




