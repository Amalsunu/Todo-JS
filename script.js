const addForm = document.querySelector(".add");

const tasks = document.querySelector(".tasks")

const clearAll = document.querySelector(".clear")

const messageSpan = document.querySelector(".message-box span")

function updateMessage(){
    const taskLength = tasks.children.length;
    messageSpan.textContent = `you have ${taskLength} pending length`;
    
}
updateMessage();

addForm.addEventListener("submit", event => {
    event.preventDefault();
    // remove whitespace
    const value=addForm.task.value.trim();

    if(value.length){
        
        tasks.innerHTML += `<li>
                                <span>${value}</span>
                                <i class="bi bi-trash3-fill delete"></i>
                            </li>`;
        addForm.reset();
        updateMessage();
    }
})

// delete

tasks.addEventListener("click", event =>{
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove();
        updateMessage();
    }
})


clearAll.addEventListener("click", event =>{
    const taskItems = tasks.querySelectorAll("li")
    taskItems.forEach(item => {
        item.remove();
        updateMessage();
    })
})