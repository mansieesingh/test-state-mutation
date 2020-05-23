import React, { Component } from "react";

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            derivedCount: 0,
            multiple: 0,
            localCount: 0,
        }
    }
     
static getDerivedStateFromProps(nextProps, prevState){
    console.log("INFO: CALLED: getDerivedStateFromProps--------------------------");    
    console.log("   INFO: nextProps", nextProps);
    console.log("   INFO: prevState", prevState);
    if(nextProps.count  !== prevState.derivedCount){
      return { derivedCount: nextProps.count,
    localCount:  nextProps.count};
   }
   else return null;
 }

    handleClick = () => {
        console.log("INFO: CALLED: Child handleClick state", this.state);
        let temp = this.state.localCount ?  this.state.localCount * 2 : this.state.derivedCount * 2 
        this.setState({ 
            localCount: temp})
    }

   componentDidUpdate(prevProps, prevState){
        console.log("INFO: CALLED: componentDidUpdate--------------------------");    
        console.log("   INFO: prevProps", prevProps);
        console.log("   INFO: prevState", prevState);
        // this.setState()
     }
    
    render() {
        console.log("INFO: RENDER: Child state: ", this.state)
        return (
            <div>
                <p>Child count is --> {this.state.localCount}</p>
                <button onClick={this.handleClick}>Multiply by 2 </button>


            </div>
        )
    }
}