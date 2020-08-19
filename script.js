let myLibrary = 
[""];

let myAuthor = 
[""];

let myPage = 
[""];

// Making demo Books
let container = document.querySelector("#container")

container.style.cssText = "display:flex; flex-direction: column;"

// for(let i = 0; i < myLibrary.length; i++)
// { 

//   div = document.createElement('div')
//   div.id =  [i]

//   let remove = document.createElement('i')
//   remove.className = "fas fa-trash"
//   remove.id = "remove"
//   div.style.cssText = "display:flex; margin: 5px; padding: 10px; border: black 10px solid; background-color: blue; text-align: center; justify-content: center; align-items: center; font-size: 30px"
 
//   div.textContent = myLibrary[i] + ", " + myAuthor[i]+ ", " + myPage[i] + " pages"
//   container.appendChild(div)
//   remove.addEventListener("click", trash => {
// trash = remove.parentNode

// let trashID = trash.getAttribute("id")

// container.removeChild(trash)
// myAuthor.splice(trashID, 1)
// myLibrary.splice(trashID,1)
// myPage.splice(trashID,1)

//   //  container.removeChild(div)
//   //   document.getElementById("yourBook" + [i]).remove()
//   })
//   div.appendChild(remove)
  
// }

// // Attempt of Prototype Use
// function Book(author, title, pages) 
// {
//   this.author = author
//   this.title = title
//   this.pages = pages
// }

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

  for(let i = 1; i < myLibrary.length; i++)
 
    { 
      div = document.createElement('div')
      let remove = document.createElement('i')
     
      remove.className = "fas fa-trash"
      div.style.cssText = "display:flex; margin: 5px; padding: 10px; border: black 10px solid; background-color: blue; text-align: center; justify-content: center; align-items: center; font-size: 30px"
     
      div.textContent = myLibrary[i] + ", " + myAuthor[i]+ ", " + myPage[i]
      container.appendChild(div)
      remove.addEventListener("click", trash => {
        trash = remove.parentNode

        let trashID = trash.getAttribute("id")
        
        container.removeChild(trash)
        myAuthor.splice(trashID, 1)
        myLibrary.splice(trashID,1)
        myPage.splice(trashID,1)
        
       

      })
      
      div.appendChild(remove)
      
    } 
    
}

add.onclick = function()
{
  addBookToLibrary()
}
