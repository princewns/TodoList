const todoInput = document.querySelector("#text");
const todoButton = document.querySelector("#button");
const todoBoard = document.querySelector("#todo-list");
const result = document.querySelector("#result");
let count = 0;

todoButton.addEventListener("click", todoFormButton);

function todoFormButton(){
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", todoCheck);
    const text = document.createTextNode(todoInput.value);

    const button = document.createElement("button");
    button.textContent = "X";
    button.addEventListener("click",todoDelete);

    todoInput.autofocus = true;

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);

    todoBoard.appendChild(li);
    todoInput.value = null;
}
function todoCheck(e){
    const checkbox = e.target;
    if(checkbox.checked==true){
        count++;
        checkbox.parentNode.style.color = "lightgray";
        return result.textContent = `오늘 완료한 할일 : ${count}개`;
    }
    else if(checkbox.checked==false){
        count--;
        checkbox.parentNode.style.color = "black";
        return result.textContent = `오늘 완료한 할일 : ${count}개`;
    }
}
function todoDelete(e){
    e.target.parentNode.remove();
}
