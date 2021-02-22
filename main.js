let input = document.querySelector('.listInput')
let submit = document.querySelector('.submit')
let listContainer = document.querySelector('.listContainer')
let clearButton = document.querySelector('.erase')
let totalTaskCounter = document.querySelector('.taskNum')
let clearCompleted = document.querySelector('.clearCompleted')
let counter = 0


function addToList(){
  let span = document.createElement('span')
 let list = document.createElement('li')
 span.addEventListener('click',turnToRed)
 span.innerText = input.value
 counter++
 returnTaskN(counter)
 let button = document.createElement('button')
 button.classList.add('deleteSingleTask')
 button.addEventListener('click', erase)
 list.appendChild(button)
 list.appendChild(span)
 listContainer.appendChild(list)
//  list.innerHTML = `<button class= \'deleteSingleTask\'></button>${input.value}`
 input.value = ''
}

function clearAll(){
 listContainer.innerHTML = ''
 counter = 0 
 returnTaskN(counter)
}
function turnToRed(e){
  console.log(e.target.parentElement.tagName)
  if(e.target.parentElement.tagName === 'LI'){
    e.target.parentElement.classList.toggle('completed')
    // e.target.parentElement.className = 'completed'
     console.log('turn to red')
  }
  if(e.target.parentElement.classList.contains('completed') ){
   counter--
    returnTaskN(counter)
  }else{
    counter++
    returnTaskN(counter)
  }
  
}

function erase(e){
  console.log('hey this is e dot target button',e.target)
  console.log('list container clicked')
  if(e.target.classList.contains('deleteSingleTask')){
  //  listContainer.removeChild(e.target.parentNode) 
  e.target.parentElement.remove()
    // counter--
    // returnTaskN(counter)
  console.log('deleteButtonClick')
  }
  
}
function clearRed(e){
 let completedItems =Array.from(document.querySelectorAll('.completed'))
 console.log(completedItems)
 for(i = 0; i < completedItems.length; i++){
  // counter--
  completedItems[i].remove()
 }
  // if(e.target.style.color === 'red'){ 
  //     listContainer.innerHTML.remove()
  //     counter--
  //     returnTaskN(counter)
  //   console.log('deleteButtonClick')
    // }
}
// function doneStuff(){
//   const completedStorage = document.querySelectorAll('.completed')
//   console.log(completedStorage,'completedStorage')
//   for (let completed of completedStorage) {
//     listContainer.removeChild(completed)
//   }
// }

// function deletedListItem(e){
//   const listItemToDelete = e.target.parentElement
//   ul.removeChild(listItemToDelete)
//   count() //call the count function again to make sure the count gets updated
// }               




function returnTaskN(counter){
  totalTaskCounter.innerText = `${counter}`
console.log(counter)
}



submit.addEventListener('click', addToList)
clearButton.addEventListener('click', clearAll)
listContainer.addEventListener('click', erase)
clearCompleted.addEventListener('click', clearRed)
