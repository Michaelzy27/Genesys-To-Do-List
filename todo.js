const todoItems = []
let mainIndex = 0

document.getElementById("add").addEventListener("click", addItem)

function addItem() {
    const newItem = document.getElementById("newItem").value
    todoItems.push(newItem)

    document.getElementById("newItem").value = ""

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
        deleteButton.addEventListener("click", (deleteTask) => {
            todoItems.splice(index, 1)
            showItems()
        })
        // setIndex(index)

        const updateButton = document.createElement("button")
        updateButton.innerHTML = "Update"
        updateButton.addEventListener("click", (updateTask) => {
            document.getElementById("newItem").value = item      //displays item in input field to allow for edit
            todoItems.splice(index, 1)
            showItems()            
        })
        

        li.appendChild(deleteButton)
        li.appendChild(updateButton)
        itemList.appendChild(li)

    }
}

console.log(todoItems.length)
