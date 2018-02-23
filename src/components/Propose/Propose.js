import React, {Component} from 'react';
import './Propose.css';


function Propose (props) {
        return (
            <div className="Propose">
                <input className="InputFilm" type="text"
                       value={props.value}
                       placeholder="Введите название вашего фильма"
                       onChange={props.changeTask}/>
                <button onClick={props.click}>Add</button>
            </div>
        );
    }
export default Propose;

