// 현재 시간 출력
const timetext = document.querySelector("#ct");
function currentTime(){ 
    const date = new Date(); // 매번 Date 객체를 새로 불러와야 함.
    timetext.innerText = `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDay()}일, ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`;
}
currentTime();
setInterval(currentTime, 1000);

// 폼 제어
const form = document.todoForm;
const todoList = document.querySelector("#todoList");
var idNum = 1;
function onSubmit(event){
    event.preventDefault();
    const todoText = form.todoText;
    let ul = document.createElement("li");
    ul.id = idNum;
    ul.innerText = todoText.value;
    // todoList.innerText = todoText.value;
    todoList.append(ul);
    console.log(todoText.value);
    todoText.value = "";
    todoText.focus();

    idNum++;
}

form.addEventListener("submit", onSubmit);