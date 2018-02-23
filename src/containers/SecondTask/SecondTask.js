import React, { Component } from 'react';
import Block from "../../components/Block/Block";
import '../../containers/SecondTask/SecondTask.css';

class SecondTask extends Component {

    state = {
        currentTask: ' ',
        tasks: []
    };
    changeTask = (event) => {
        const currentTask = event.target.value;
        this.setState({currentTask});
    };

    addTask = (event) => {
        const addTask = [...this.state.tasks];
        const nextTask = {
            task: this.state.currentTask,
            id: Date.now()
        };
        addTask.push(nextTask);
        this.setState({tasks: addTask, currentTask: ''});

    };

    changeInput = (event, id) => {
        const index = this.state.tasks.findIndex(p => p.id === id);
        const film = {...this.state.tasks[index]};
        film.task = event.target.value;

        const kadr = [...this.state.tasks];
        kadr[index] = film;

        this.setState({tasks: kadr});
    };

    removeInput = (id) => {
        const index = this.state.tasks.findIndex(p => p.id === id);
        const bulb = [...this.state.tasks];
        bulb.splice(index, 1);

        this.setState({tasks: bulb});
    };

    render() {
        return (
            <div className="SecondTask">
                <Block click={this.addTask}
                       changeTask={this.changeTask}
                       block={this.state.tasks}
                       changeInput={this.changeInput}
                       removeInput={this.removeInput}
                       value={this.state.currentTask}/>
            </div>
        );
    }
}

export default SecondTask;
