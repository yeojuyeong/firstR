/**
 * 
 * 최초 작성일 :2023.11.24
 * 최초 작성자: 
 * 수정자:
 * 이력: 2023.11.24 최초작성
 * 기능: todo 리스트를 제어한다.
 *     : toDo리스트 추가
 *     : todo리스트 로컬스토리지에 저장 (로컬스토리지에는 string만 저장가능)
 */

const frmTodo = document.getElementById("frmToDo");
const lstTodo = document.getElementById("lstToDo");
const inputTodo = document.querySelector("#frmToDo input");
let todos = []
const KEY_TODOS = "todos";

/**
 * 할일 목록을 로컬 스토리지에 저장한다.
 */
function saveTodos(){
    console.log("todos :",todos);
    localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
}

/** todo리스트에서 항목을 삭제한다. **/
function deleteTodo(event) {
    console.log("deleteTodo 함수 시작");
    // console.log(event);
    // console.dir(event);
    // console.log(event.target.parentElement);
    const li = event.target.parentElement;
    console.log(li);
    // console.log("list의 type", typeof(li));
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));    
    saveTodos();
}

/** todo리스트 목록을 출력한다. **/  
function displayTodo(arg){
    // console.log("hi", arg);

    //리스트(ul) 추가하기
    //ul>li>span
    //li추가
    const li = document.createElement("li");
    li.id = arg.id;
    //span추가
    const span = document.createElement("span");
    //span에 할일(arg) 추가
    span.innerText = arg.text;

    //X버튼 추가
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    lstTodo.appendChild(li);
}

/**
 * form에 입력된 값을 변수에 저장하고
 * form의 내용은 지운다.
 * todo리스트를 출력하는 함수를 호출한다.
 * @param {*} event 
 */
function handleSubmitTodo(event) {
    event.preventDefault();
    const valueTodo = inputTodo.value;
    // console.log(valueTodo);
    inputTodo.value = "";
    const newToDoObj = {
        text : valueTodo,
        id : Date.now(),
    }
    todos.push(newToDoObj);
    console.log(todos);
    displayTodo(newToDoObj);
    saveTodos();
}

frmTodo.addEventListener("submit", handleSubmitTodo);

const lssaveTodos = localStorage.getItem(KEY_TODOS);
if (lssaveTodos !== null) {
    // console.log("lssaveTodos", lssaveTodos);
    // console.log(JSON.parse(lssaveTodos));

    const parseLsSaveTodos = JSON.parse(lssaveTodos);
    todos = parseLsSaveTodos;
    parseLsSaveTodos.forEach(displayTodo)
    // parseLsSaveTodos.forEach(item => {
    //     console.log(item);
    // });

}