var addButton = document.getElementById("add")
var todoList = document.getElementById("todoList")
var todoInput = document.getElementById("todoInput")
var deleteAll = document.getElementById("deleteAll")
var todoDate = document.getElementById("todoDate")

function markDone(event) {
    if (event.target.innerHTML === "Done") {
        event.target.parentElement.parentElement.classList.add("markDone")
        event.target.innerHTML = "Undone"
    }
    else {
        event.target.parentElement.parentElement.classList.remove("markDone")
        event.target.innerHTML = "Done"
    }
    event.target.parentElement.parentElement.classList.remove("markProgress")
}

function deleteTodo(event) {
    var id = event.target.parentElement.parentElement.id
    document.getElementById(id).remove()
}

function markProgress(event) {
    event.target.parentElement.parentElement.classList.add("markProgress")
}
function edit(event){
    var popup=document.createElement("div")
    popup.id="popup"
    
}

function addTodo() {
    var todoMain = document.createElement("div")
    todoMain.classList.add("todo")
    todoMain.id = String(Math.random())

    var todo = document.createElement('div')
    var name = document.createElement('div')
    name.appendChild(document.createTextNode(todoInput.value))
    todo.appendChild(name)
    todo.classList.add("details")
    name.classList.add("name")
    var date = document.createElement('div')
    if (todoDate.value !== "")
        date.appendChild(document.createTextNode("By: " + todoDate.value))
    date.classList.add("date")
    todo.appendChild(date)
    todoMain.appendChild(todo)
    todoInput.value = ""
    todoDate.value = ""

    var todoOptions = document.createElement("div")
    todoOptions.classList.add("options")

    var todoDone = document.createElement("a")
    todoDone.href = "#"
    todoDone.style.backgroundColor = "green"
    todoDone.appendChild(document.createTextNode("Done"))
    todoOptions.appendChild(todoDone)
    todoDone.addEventListener("click", markDone)

    var todoEdit = document.createElement("a")
    todoEdit.href = "#"
    todoEdit.appendChild(document.createTextNode("Edit"))
    todoEdit.style.backgroundColor = "rgb(51, 51, 158)"
    todoOptions.appendChild(todoEdit)
    todoEdit.addEventListener("click", edit)

    var todoDone = document.createElement("a")
    todoDone.href = "#"
    todoDone.style.backgroundColor = "blueviolet"
    todoDone.appendChild(document.createTextNode("In Progress"))
    todoOptions.appendChild(todoDone)
    todoDone.addEventListener("click", markProgress)

    var todoX = document.createElement("a")
    todoX.href = "#"
    todoX.appendChild(document.createTextNode("X"))
    todoX.style.backgroundColor = "#f44336"
    todoOptions.appendChild(todoX)
    todoX.addEventListener("click", deleteTodo)

    todoMain.appendChild(todoOptions)
    todoList.prepend(todoMain)
}

function clearAll() {
    var check = confirm(
        "Are you sure you want to clear List?"
    )
    if (check == true)
        document.getElementById("todoList").innerHTML = ""

}

addButton.addEventListener("click", function () {
    if (todoInput.value === "") {
        alert("To-Do textbox cannot be empty")
    }
    else {
        addTodo()
    }
})

deleteAll.addEventListener("click", function() {
    if(todoList.innerHTML!=="")
        clearAll()
})
