const todoItems = []

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
        deleteButton.textContent = "Delete"
        deleteButton.addEventListener("click", deleteTask(index))

        li.appendChild(deleteButton)
        itemList.appendChild(li)

    }
}

function deleteTask(index) {
    todoItems.splice(index, 1)
    showItems()
}

console.log(todoItems.length)
