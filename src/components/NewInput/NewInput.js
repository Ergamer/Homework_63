import React, { Component } from 'react';
import './NewInput.css'


class NewInput extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.text !== this.props.text;
    }

    componentWillUpdate() {
        console.log('updated')
    }

    render() {
        return (
            <div className="Task">
                <input className="NewInput" type="text" value={this.props.text} onChange={this.props.changeInput}/>
                <button onClick={this.props.removeInput}>Delete</button>
            </div>
        );
    }

}
export default NewInput;
