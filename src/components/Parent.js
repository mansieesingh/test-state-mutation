import React, { Component } from "react";
import Child from './Child';

export default class Parent extends Component {
state = {
    count: 0
}

updateCount = (value) => {
    
    console.log("INFO: CALLED: Parent updateCount--------------------------");    
    console.log("   INFO: value ", value);
    this.setState({count: value})
}
handleClick = () => {
    this.setState({count: this.state.count+1})
}
    render() {
        return (
            <>
            <p>Parent count is --> {this.state.count}</p>
                <button onClick={this.handleClick}>Parent</button>
                <Child count={this.state.count} updateCount={(value) => this.updateCount(value)}/>
            </>
        )
    }
}