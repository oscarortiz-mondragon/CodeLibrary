let myLibrary = 
[""];

let myAuthor = 
[""];

let myPage = 
[""];

// Making demo Books
let container = document.querySelector("#container")

container.style.cssText = "display:flex; flex-direction: column;"



// Adding Books to Container
let add = document.getElementById("Add")

function addBookToLibrary() 
{
  
  container.innerHTML = ""

  

  let title = document.getElementById("Title").value
  let author = document.getElementById("Author").value
  let pages = document.getElementById("Pages").value
for(let i = 0; i < myAuthor.length; i++){
  if(myLibrary[i] === title ){
   return alert("please input a new Book")
  }
   if(pages % 1 !== 0 ){
    return alert("please input a number")
  }
}
  myLibrary.push(title)
  myAuthor.push(author)
  myPage.push(pages)

  for(let i = 1; i < myLibrary.length; i++)
 
    { 
      div = document.createElement('div')
      let remove = document.createElement('i')
      let read = document.createElement("p")
     read.className = "ReadOrNot"
      remove.className = "fas fa-trash"
      div.style.cssText = "display:flex; margin: 5px; padding: 10px; border: black 10px solid; background-color: blue; text-align: center; justify-content: center; align-items: center; font-size: 30px"
     read.setAttribute("style", "Border: 10px solid green;")
      div.textContent = myLibrary[i] + ", " + myAuthor[i]+ ", " + myPage[i]
      container.appendChild(div)
      console.log(read.getAttribute('style'))
read.addEventListener("click", changeRead => {

if(read.getAttribute("style") === "Border: 10px solid green;"){
  read.setAttribute("style","Border: 10px solid red;")
}
else{
  read.setAttribute("style","Border: 10px solid green;")
}
})
      remove.addEventListener("click", trash => {
        trash = remove.parentNode

        let trashID = trash.getAttribute("id")
        
        container.removeChild(trash)
        myAuthor.splice(trashID, 1)
        myLibrary.splice(trashID,1)
        myPage.splice(trashID,1)
        
       

      })
      
      div.appendChild(remove)
      div.appendChild(read)
    } 
    
}




add.onclick = function()
{
  addBookToLibrary()
}
