import {createStore} from 'redux';

const todoForm = document.querySelector("#todo-form");
const input = document.querySelector("input");
const ul = document.querySelector("#todo-list");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state=[], action) => {

  switch(action.type){
    case ADD_TODO:
      return [...state, {text: action.text, id: Date.now()}];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== parseInt(action.id));
    default:
      return state;
  }
}

const addTodo = (text)=>{
  return {
    type: ADD_TODO,
    text
  }
}
const deleteTodo = (id)=>{
  return{
    type: DELETE_TODO,
    id
  }
}


const todoStore = createStore(reducer);

todoStore.subscribe(()=>console.log(todoStore.getState()));

const dispatchAddTodo = (text) =>{
  todoStore.dispatch(addTodo(text));
  paintTodo();
}

const dispatchDeleteTodo = (event) => {
  const id = parseInt(event.target.parentNode.id);
  todoStore.dispatch(deleteTodo(id));
  paintTodo();
}

const paintTodo = () =>{
  ul.innerHTML = "";
  const todos = todoStore.getState();
  todos.forEach(todo=>{

    const li = document.createElement("li");
    li.id = todo.id;
    li.innerText = todo.text;
    
    const btn = document.createElement("button");
    btn.innerText = "del";
    btn.addEventListener("click", dispatchDeleteTodo);

    li.appendChild(btn);
    ul.appendChild(li);
  })
}

const onSubmitHandler = (event)=>{
  event.preventDefault();
  const todoTemp = input.value;
  input.value = "";
  dispatchAddTodo(todoTemp);
}

todoForm.addEventListener("submit", onSubmitHandler);