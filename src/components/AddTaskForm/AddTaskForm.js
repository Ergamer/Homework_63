import React, { Component } from 'react';
import './AddTaskForm.css'

function AddTaskForm (props){
    return (
        <div className="Add">
            <input type="text" placeholder="Add new task" onChange={props.changeTask}/>
                <button onClick={props.addTask}>Add</button>
        </div>
    );
}
 export default AddTaskForm;