import React, {useState} from "react";
import {connect} from 'react-redux';
import { actionCreators } from "../store";
import Todo from "../components/Todo";

const Home = ({todos, addTodo}) =>{
    const [text, setText] = useState("");
    const onChange = (event)=>{
        setText(event.target.value);
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
               {todos.map((todo)=>(
                   <Todo {...todo} key={todo.id} />
               ))}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {todos: state}
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addTodo: text => dispatch(actionCreators.addTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);