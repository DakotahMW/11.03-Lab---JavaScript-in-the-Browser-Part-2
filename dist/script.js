let doneBtn = null;


function domLoaded(){
    addBtn = document.querySelector("#add-btn");

    // check if querySelecter() is successful
    if(addBtn){
        addBtn.addEventListener("click", addBtnClick);
    } else{
        console.error("Something went wrong with add button");
    }

    textBox = textBox = document.querySelector("#task-text");
    // check if querySelecter() is successful
    if(textBox){
        textBox.addEventListener("keyup", function(event){
            if(event.key === "Enter")
            {
                addBtnClick(event); 
            }
        });
    } else{
        console.error("Something went wrong with text box");
    }

    updateDoneBtn();
}

function addBtnClick(event){
    textBox = document.querySelector("#task-text");
    if (textBox.value !== "") {
        addTask(textBox.value);
    }
    textBox.value = "";
    textBox.focus();
}

function addTask(text){
    li = document.createElement("li");
    li.innerHTML = `<span class="task-text">${text}</span><button class="done-btn">&#10006;</button>`;
    ol = document.querySelector("#list");
    ol.appendChild(li);
    updateDoneBtn();
}

function removeTask(event){
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    updateDoneBtn();
}

function updateDoneBtn(){
    doneBtn = document.querySelectorAll(".done-btn");
    for(let i = 0; i < doneBtn.length; i++){
        doneBtn[i].addEventListener("click", removeTask);
    }
}

window.addEventListener("DOMContentLoaded", domLoaded);