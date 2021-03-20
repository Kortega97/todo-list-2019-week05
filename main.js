let input = document.querySelector('.listInput')
let submit = document.querySelector('.submit')
let listContainer = document.querySelector('.listContainer')
let clearButton = document.querySelector('.erase')
let totalTaskCounter = document.querySelector('.taskNum')
let clearCompleted = document.querySelector('.clearCompleted')
let counter = 0

fetch('')
.then(res => res.json())
.then(data =>)

// function addToList(){
//   let span = document.createElement('span')
//   let list = document.createElement('li')
//   span.addEventListener('click',turnToRed)
//   span.innerText = input.value
//   counter++
//   returnTaskN(counter)
//   let button = document.createElement('button')
//   button.classList.add('deleteSingleTask')
//   button.addEventListener('click', erase)
//   list.appendChild(button)
//   list.appendChild(span)
//   listContainer.appendChild(list)
//   input.value = ''
// }

function clearAll(){
 fetch('eraseAll')
.then(res => {if (res.ok){return res.json()}})
.then(window.location.reload(true))
}

// function turnToRed(e){
//   console.log(e.target.parentElement.tagName)
//   if(e.target.parentElement.tagName === 'LI'){
//     e.target.parentElement.classList.toggle('completed')
//      console.log('turn to red')
//   }
//   if(e.target.parentElement.classList.contains('completed') ){
//    counter--
//     returnTaskN(counter)
//   }else{
//     counter++
//     returnTaskN(counter)
//   }
  
// }

// function erase(e){
//   console.log('hey this is e dot target button',e.target)
//   console.log('list container clicked')
//   if(e.target.classList.contains('deleteSingleTask')){
//   e.target.parentElement.remove()
  
//   console.log('deleteButtonClick')
//   }
  
// }
// function clearRed(e){
//  let completedItems =Array.from(document.querySelectorAll('.completed'))
//  console.log(completedItems)
//  for(i = 0; i < completedItems.length; i++){
//   // counter--
//   completedItems[i].remove()
//  }
  
// }
function returnTaskN(counter){
totalTaskCounter.innerText = `${counter}`
console.log(counter)
}



submit.addEventListener('click', addToList)
clearButton.addEventListener('click', clearAll)
listContainer.addEventListener('click', erase)
clearCompleted.addEventListener('click', clearRed)
