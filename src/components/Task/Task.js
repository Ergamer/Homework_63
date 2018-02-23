import React, { Component } from 'react';
import './Task.css'

function Task (props){
    return (
        <div className="Task">
            <p>{props.text}</p>
            <button onClick={props.removeTask}>Delete</button>
        </div>
    );
}
export default Task;
