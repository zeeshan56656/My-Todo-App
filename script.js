//slectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterTodo = document.querySelector('.filter-todo');
//Event Listner

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterTodo.addEventListener('click', selectTodo);

//functions

function addTodo(event) {
        event.preventDefault()
        if(!todoInput.value==''){
        //create div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo")
        //create list item
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        //check mark button
        const competeButton = document.createElement("button");
        competeButton.classList.add("complete-btn");
        competeButton.innerHTML = '<i class="fas fa-check"></i>';
        todoDiv.appendChild(competeButton);
        //check deletebutton button
        const TrashButton = document.createElement("button");
        TrashButton.classList.add("trash-btn");
        TrashButton.innerHTML = '<i class="fas fa-trash"></i>';
        todoDiv.appendChild(TrashButton);
        //append to parent div
        todoList.appendChild(todoDiv);
        //clear data
        todoInput.value = '';
        }
        else{
        console.log("error")
        }

}

function deleteCheck(event) {
        const item = event.target;
        //delete item
        if (item.classList[0] === 'trash-btn') {
                const todo = item.parentElement;
                todo.classList.add('fall');
                todo.addEventListener('transitionend', () => {
                        todo.remove();

                })
        }
        if (item.classList[0] === 'complete-btn') {
                const todo = item.parentElement;
                todo.classList.toggle('completed');
        }
}

function selectTodo(e) {
        const todos = todoList.childNodes;
        todos.forEach(function(todo) {
                switch (e.target.value) {
                        case "all":
                                todo.style.display = "flex";
                                break;

                        case "completed":
                                if (todo.classList.contains("completed")) {
                                        todo.style.display = "flex";
                                } else {
                                        todo.style.display = "none";
                                }
                                break;
                        case "uncompleted":
                                if (!todo.classList.contains("uncompleted")) {
                                        todo.style.display = "flex";
                                } else {
                                        todo.style.display = "none";
                                }
                                break;
                }
        })
}
 


// function selectTodo(e){
//         const todos = TouchList.childNodes;
//         console.log(todos);
// }