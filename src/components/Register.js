
import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1)
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
});

class Register extends Component {

constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  email:'',
  userregistered:false
  }
 }

 handleClick(event){
   this.setState({userregistered: true});
   this.props.onRegister(true);  
   alert("User '"+this.state.username+"' registered successfully!!!")
 }

render() {
  const { classes } = this.props;

    return (
      <div>
        <MuiThemeProvider>
          <div className={classes.root}>
          
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your E-mai ID"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
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
export default withStyles(styles)(Register);