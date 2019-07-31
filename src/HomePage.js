import React, { Component } from "react";
import logo from "./App-icon.png";
import "./App.css";
import WelcomePage from "./components/WelcomePage"
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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

class HomePage extends Component {
  state = {
    newItem: "",
    taskDescription: "",
    taskPriority:"",
    list: [],
    selectedDate: new Date(),
    isUserLoggedIn : false
  };

  handlelogoutButton = (userLoggedIn) => {
    this.setState({isUserLoggedIn: userLoggedIn})
  }


  render() {
    const { classes } = this.props;
    

    return (
      <div className="App" style={{ minHeight: '100%' }}  >
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <img src={logo} alt="Smiley face" width="150" height="80" />
              <Typography variant="h3" color="inherit" className="App-header">
                Taskpad 
              </Typography>
              {this.state.isUserLoggedIn ? 
              <Button variant="contained" color="inherit" className={classes.logoutButtons}>Logout</Button>
              : <div></div>
            }
              
            </Toolbar>
          </AppBar>
    </div>
        
        {/* <div>  Add your Task! </div> */}
        
        <WelcomePage onUserLoggedIn  = {this.handlelogoutButton} />
        {/* <TaskPage /> */}
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
