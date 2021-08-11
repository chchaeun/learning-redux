import React, {useState} from "react";
import {connect} from 'react-redux';
import { actionCreators } from "../store";

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
               {JSON.stringify(todos)}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {todos: state}
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        addTodo: text => dispatch(actionCreators.addTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);