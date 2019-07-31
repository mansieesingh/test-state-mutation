
import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    margin: theme.spacing(1)
  },
  dropdown: {
  width: 200,
  marginTop: 19
  },
  input: {
    display: "none"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  grid: {
    width: '60%',
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  logoutButtons: {
    marginLeft: 450,
    marginRight: -1
  },
  title: {
    flexGrow: 1,
    
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 250,
  },
});

class GroupRegister extends Component {

constructor(props){
  super(props);
  this.state={
  groupname:'',
  password:'',
  userlist:'',
  groupregister:false,
  labelWidth: 0,
  }
 }

 handleClick(event){
  this.setState({groupregister: true});
  this.props.onGroupRegister(true);  
  alert("User Group '"+this.state.groupname+"' registered successfully!!!")
}

handleChange = name => event => {
  this.setState({ [name]: event.target.value });
};

render() {
  const { classes } = this.props;

    return (
      <div>
        <MuiThemeProvider>
          <div className={classes.root}>
          
           <TextField
             hintText="Enter your Group name"
             floatingLabelText="Group Name"
             onChange = {(event,newValue) => this.setState({groupname:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter Member users"
             floatingLabelText="Member Users"
             onChange = {(event,newValue) => this.setState({userlist:newValue})}
             />
             
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <Button color="primary"  variant="contained" component="span" className={classes.button} onClick={(event) => this.handleClick(event)}>
          Register
        </Button>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
// const style = {
//  margin: 15,
// };
export default withStyles(styles)(GroupRegister);