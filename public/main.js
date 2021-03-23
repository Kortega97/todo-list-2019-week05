let input = document.querySelector('.listInput')
let submit = document.querySelector('.submit')
let listContainer = document.querySelector('.listContainer')
let clearButton = document.querySelector('.clear')
let totalTaskCounter = document.querySelector('.taskNum')
let clearCompleted = document.querySelector('.clearCompleted')
let button = document.querySelector('.erase').addEventListener('click', erase)


function clearAll(){
 fetch('eraseAll',{
  method:'delete',headers:{
    'Content-Type':'application/json'
  }
 })
.then(function(res) {window.location.reload()})
}

function turnToRed(e){
 if(e.taget.tagName === 'SPAN')fetch('checked',{
  method:'put',headers:{
    'Content-Type':'application/json'
  },body:JSON.stringify({
    // if li change to e.target.childNode[1].innerText,
    'task':e.target.innerText,
    'marked':e.target.classList.contains('completed')
  })
 })
 .then(res => {if (res.ok){return res.json()}})
 .then(window.location.reload(true))
 }
  


function erase(e){
  // console.log('hey this is e dot target button',e.target)
  // console.log('list container clicked')
  // if(e.target.classList.contains('deleteSingleTask')){
  // e.target.parentElement.remove()
  
  // console.log('deleteButtonClick')
  fetch('eraseOne')
  .then(res => {if (res.ok){return res.json()}})
  .then(window.location.reload(true))
  

  }
  
// }
function clearRed(e){
//  let completedItems =Array.from(document.querySelectorAll('.completed'))
//  console.log(completedItems)
//  for(i = 0; i < completedItems.length; i++){
//   // counter--
//   completedItems[i].remove()
//  }
  fetch('eraseMarked')
  .then(res => {if (res.ok){return res.json()}})
  .then(window.location.reload(true))
}
function returnTaskN(counter){
totalTaskCounter.innerText = `${counter}`
console.log(counter)
}


clearButton.addEventListener('click', clearAll)
listContainer.addEventListener('click', erase)
clearCompleted.addEventListener('click', clearRed)
