import React, {Component} from 'react';
import './Block.css';
import Propose from "../Propose/Propose"
import NewInput from "../NewInput/NewInput"


class Block extends Component {

    render() {
        return (
            <div className="Block">
                <Propose click={this.props.click}
                         value={this.props.value}
                         changeTask={this.props.changeTask}/>
                {this.props.block.map((task, face) => {
                    return <NewInput text={task.task} key={task.id}
                                     changeInput={(event) => this.props.changeInput (event, task.id)}
                                     removeInput={() => this.props.removeInput(task.id)}
                    />
                })
                }
            </div>
        )
    }
}
export default Block;
