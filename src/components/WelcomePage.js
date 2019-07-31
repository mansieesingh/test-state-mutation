import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Login from "./Login";
import TaskPage from "./TaskPage"


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    
  },
});

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

WelcomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WelcomePage);
