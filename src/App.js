import React, { Component } from 'react';
import './App.css';
import {Switch,Route,NavLink} from "react-router-dom";
import FirstTask from "./containers/FirstTask/FirstTask";
import SecondTask from "./containers/SecondTask/SecondTask";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavLink to="/first">FirstTask</NavLink>
                <NavLink to="/second">SecondTask</NavLink>
                <Switch>
                    <Route path="/first" exact component={FirstTask}/>
                    <Route path="/second" exact component={SecondTask}/>
                </Switch>
            </div>
        );
    }
}

export default App;