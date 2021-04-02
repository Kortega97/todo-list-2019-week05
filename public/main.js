let input = document.querySelector('.listInput')
let submit = document.querySelector('.submit')
let listContainer = document.querySelector('.listContainer')
let clearButton = document.querySelector('.clear')
let totalTaskCounter = document.querySelector('.taskNum')
let clearCompleted = document.querySelector('.clearCompleted')
// let button = document.querySelector('.erase').addEventListener('click', erase)


function clearAll() {
  fetch('eraseAll', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function (res) {
      window.location.reload()
    })
}

function turnToRed(e) {
  if(e.target.tagName === 'SPAN') console.log('HELLO') 
  fetch('checked', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // if li change to e.target.childNode[1].innerText,
        'task': e.target.innerText,
        'marked': e.target.classList.contains('completed')
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
    })
    .then(window.location.reload(true))
}



function erase(e) {
  if (e.target.className === 'erase') {
    const listItem = e.target.closest('li')
    fetch('eraseOne', {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          // if li change to e.target.childNode[1].innerText,
          'task': listItem.querySelector('.taskItem').innerText
        })
      })
      .then(window.location.reload(true))
  }
}


function clearRed(e) {

  fetch('eraseMarked', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
    })
    .then(window.location.reload(true))
}

function returnTaskN(counter) {
  totalTaskCounter.innerText = `${counter}`
  console.log(counter)
}


clearButton.addEventListener('click', clearAll)
listContainer.addEventListener('click', erase)
clearCompleted.addEventListener('click', clearRed)
listContainer.addEventListener('click',turnToRed)
