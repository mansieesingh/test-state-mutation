import React from 'react';
import Login from "./Login";
import TaskPage from "./TaskPage"


class WelcomePage extends React.Component {
  state = {
    value: 0,
    loadChildComponentflag: false,
    open:false

  };
  setChildComponentFlag = (userValidity) => {
    console.log("In Welcome.js ---> setChildComponentFlag() ");
    this.setState({loadChildComponentflag: userValidity})
    console.log("In Welcome.js this.setState({loadChildComponentflag: userValidity})  "+this.state.loadChildComponentflag )
  }

  render() {
    const { loadChildComponentflag } = this.state;
    console.log("In Welcome.js ---> render() ");
    return (
        <div>
              {console.log("      In Welcome.js  ---> render() ---> this.state.loadChildComponentflag "+this.state.loadChildComponentflag)}
              {loadChildComponentflag ?  <TaskPage />  : <Login onLogin = {this.setChildComponentFlag}/>}
        </div>
   
    );
  }
}



export default WelcomePage;
