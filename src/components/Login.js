
import React, { Component } from "react";

class Login extends Component {

constructor(props){
  super(props);
  this.state={
    clickedButton2: false,
    clickedButton3: false,
    clickedButton1: false,
  }
 }

 handleClick2 = () => {
  console.log("--------------------------------Clicked Button-2 --------------------------------");
  this.setState({clickedButton2: true});
  console.log("In Login.js this.setState({clickedButton2: true})  "+ this.state.clickedButton2);
 }

 handleClick3 = () => {
  console.log("--------------------------------Clicked Button-3 --------------------------------");
  this.setState({clickedButton3: true});
  console.log("In Login.js this.setState({clickedButton3: true})  "+ this.state.clickedButton3);
  //console.log(this);  // this refers to Login Class
}


 handleClick1 = () => {
  console.log("--------------------------------Clicked Button-1 --------------------------------");
    this.setState({clickedButton1: true}, function () {this.props.onLogin(this.state.clickedButton1)});
   // this.setState({clickedButton1: true});
   
    // this callback function updated the state immmediately
    // this is because callback function will be executed only after asynchonous setState() 
    // function has completed its update

    console.log("In Login.js this.setState({clickedButton1: true})  "+ this.state.clickedButton1);
   // this.props.onLogin(this.state.clickedButton1); // this does not updates the state immmediately
  
  }

render() {
    console.log("In Login.js ---> render() ");
    // console.log(this);  // this refers to Login Class
    return (
      <div>
         {console.log("     In Login.js  ---> render() ---> this.state.clickedButton1 "+this.state.clickedButton1)}
         {console.log("     In Login.js  ---> render() ---> this.state.clickedButton2 "+this.state.clickedButton2)}
         {console.log("     In Login.js  ---> render() ---> this.state.clickedButton3 "+this.state.clickedButton3)}

         <button onClick={this.handleClick1}>  setSate and props 1 </button>
         <button onClick={this.handleClick2}>  setSate 2 </button>
         <button onClick={this.handleClick3}>  setSate 3 </button>

      </div>
    );
  }
}

export default Login;