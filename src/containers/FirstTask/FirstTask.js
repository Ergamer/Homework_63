import React, { Component } from 'react';
import '../../containers/FirstTask/FirstTask.css';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm'
import Task from '../../components/Task/Task';


class FirstTask extends Component {
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
        this.setState({tasks: addTask});

    };

    removeTask = (id) => {
        const removeTask = this.state.tasks.findIndex(p => p.id === id);
        const remover = [...this.state.tasks];
        remover.splice(removeTask, 1);

        this.setState({tasks: remover});
    };

    render() {
        return (<div className="Container">
          <AddTaskForm changeTask={this.changeTask}
                       addTask={() => this.addTask()} />
            {this.state.tasks.map((task, face) => {
                return <Task text={task.task} key={task.id}
                             removeTask={() => this.removeTask(task.id)}
                />
            })
            }
        </div>);
    }
}

export default FirstTask;
