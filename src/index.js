import {createStore} from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");


const countModifier = (count=0, action) =>{
  if(action.type === "add"){
    return count+1;
  }else if(action.type === "minus"){
    return count-1;
  }else{
    return count;
  }
}

const countStore = createStore(countModifier);
console.log(countStore.getState());

number.innerText = countStore.getState();

const handleAdd = () => {
  countStore.dispatch({type: "add"});
}

const handleMinus = ()=>{
  countStore.dispatch({type: "minus"});
}


const onClick = () =>{
  number.innerText = countStore.getState();
}

countStore.subscribe(onClick);

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
