const delBtn = document.querySelectorAll('.del')
const done = document.querySelectorAll('span.done')
const not = document.querySelectorAll('span.not')

Array.from(not).forEach(el => el.addEventListener('click', markComplete))
Array.from(done).forEach(el => el.addEventListener('click', markIncomplete))
Array.from(delBtn).forEach(el => el.addEventListener('click', removeTodo))

async function markComplete() {
    console.log('clicked')
    try{
        const todoId = this.parentNode.dataset.id
        const response = await fetch('/todos/markComplete',{
            method: 'put',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({
                'id' : todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(err){
        console.log(err)
    }
}

async function markIncomplete() {
    console.log('clicked')
    try{
        const todoId = this.parentNode.dataset.id
        const response = await fetch('/todos/markIncomplete',{
            method: 'put',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({
                'id' : todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(err){
        console.log(err)
    }
}

async function removeTodo() {
    
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('/todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'id': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(err){
        console.log(err)
    }
}