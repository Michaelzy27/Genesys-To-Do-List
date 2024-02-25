const todoItems = []
let mainIndex = 0

document.getElementById("add").addEventListener("click", addItem)

function addItem() {
    const newItem = document.getElementById("newItem").value
    todoItems.push(newItem)

    showItems()

    //if(todoItems.length == 1){}
}

function showItems() {
    const itemList = document.getElementById("itemList")
    itemList.innerHTML = ""

    for (let index = 0; index < todoItems.length; index++) {
        const item = todoItems[index]

        const li = document.createElement("li");
        li.textContent = item;

        const deleteButton = document.createElement("button")
        deleteButton.innerHTML = "Delete"
        //deleteButton.addEventListener("click", deleteTask)
        setIndex(index)
        deleteButton.onclick = deleteTask

        const updateButton = document.createElement("button")

        li.appendChild(deleteButton)
        itemList.appendChild(li)

    }
}

function setIndex(index) {    // the app todo list was not updating when arguemtn was passed into deleteTask so custom getter and setters had to be created
    mainIndex = index
}

function getIndex() {
    return mainIndex
} 

function deleteTask() {
    var ind = getIndex()
    todoItems.splice(ind, 1)
    showItems()
}

console.log(todoItems.length)
