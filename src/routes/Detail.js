import React from 'react';
import {connect} from 'react-redux';

function Detail({todo}) {

    return(
    <>
        <h1>{todo?.text}</h1>
        <h5>Created at: {todo?.id}</h5>
    </>);
}

const mapStateToProps = (state, ownProps)=>{
    console.log(state);
    const id = ownProps.match.params.id;
    return {todo: state.find(todo => todo.id === parseInt(id))};
}

export default connect(mapStateToProps) (Detail);