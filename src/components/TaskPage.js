import React, { Component } from "react";
import "../App.css";
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
// import ReactExport from 'react-data-export';
import FormControl from '@material-ui/core/FormControl';

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const styles = theme => ({
  
  root: {
    flexGrow: 1,
  },
  button: {
     width: 50
  },
  downloadButton: {
     width: 200
  },
  deleteButton: {
    width: 50,
    height: 50
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
  dropdown: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
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

class TaskPage extends Component {
  constructor(props) {
    super(props);
  this.state = {
    id:"",
    newItem: "",
    taskDescription: "",
    taskPriority: "",
    taskCategory:"",
    list: [],
    exportData: [],
    selectedDate: new Date()
  };
}

  updateInput = (key, value) => {
    //update react state
    this.setState({
      [key]: value
    });
  };

  
  addItem = () => {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      itemValue: this.state.newItem.slice(),
      itemCategory: this.state.taskCategory.slice(),
      itemDescriptionValue: this.state.taskDescription.slice(),
      itemPriorityValue: this.state.taskPriority.slice(),
      itemSelectedDate: this.state.selectedDate.slice(),
    };
 
 
    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem: "",
      taskCategory:"",
      taskPriority: "",
      taskDescription: "",
      selectedDate: ""
    });

  };
  deleteItem = id => {
    //copy current list of items
    const list = [...this.state.list];

    //filter out items being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleExport = () => {

  }
  render() {
    const { classes } = this.props;
    console.log("In Taskpage.js ---> render() ");
    return (
      <div className="App" style={{ minHeight: '100%' }}  >
        
        <br />
        <Paper className="Add-task-bar">
        <Grid container spacing={3}>

                {/*INPUT:  Task Name */}
                <Grid item xs>
                <TextField
                  id="standard-name"
                  label="Task"
                  className={classes.textField}
                  value={this.state.newItem}
                  onChange={e => this.updateInput("newItem", e.target.value)}
                  margin="normal"
                  placeholder="Enter task here..."
                />
                </Grid>

                {/*INPUT:  Task Category */}
                <Grid item xs> 
                <InputLabel htmlFor="taskCategory">Task Category</InputLabel>
                 <FormControl >
                  <Select
                    className={classes.textField}
                    value={this.state.taskCategory}
                    onChange={e => this.updateInput("taskCategory", e.target.value)}
                  
                    inputProps={{
                        name: 'taskCategory',
                        id: 'taskCategory',
                    }}
                    >
                    <MenuItem value="Personal">Personal</MenuItem>
                    <MenuItem value="Home">Home</MenuItem>
                    <MenuItem value="Office">office</MenuItem>
                    </Select>
                </FormControl> 
                </Grid>

                {/*INPUT:  Task Descriptio */}
                <Grid item xs>
                <TextField
                  id="standard-name"
                  label="Task Details"
                  className={classes.textField}
                  value={this.state.taskDescription}
                  onChange={e => this.updateInput("taskDescription", e.target.value)}
                  margin="normal"
                  placeholder="Enter task description here..."
                />
                </Grid>

                {/*INPUT:  Task Priority */}
                <Grid item xs> 
                <InputLabel htmlFor="taskPriority">Priority</InputLabel>
                 <FormControl >
                  <Select
                    className={classes.textField}
                    value={this.state.taskPriority}
                    onChange={e => this.updateInput("taskPriority", e.target.value)}
                  
                    inputProps={{
                        name: 'taskPriority',
                        id: 'taskPriority',
                    }}
                    >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    </Select>
                </FormControl> 
                </Grid>

                {/*INPUT:  Task End Date */}
                <Grid item xs>
                <TextField
                  id="date"
                  label="Task End Date"
                  type="date"
                  className={classes.textField}
                  value={this.state.selectedDate}
                  onChange={e => this.updateInput("selectedDate", e.target.value)}
                  
                />
                </Grid>

                {/*INPUT:  Task Delete Button */}
                <Grid item xs>
                <Button
                  onClick={() => this.addItem()}
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Add
                </Button>
              </Grid>
             
          </Grid>
        </Paper>
        <br />

        {/*Task display */}
        <Grid container spacing={3}>  
            <ul align="left" style= {{ listStyle: 'none'}}>
          {this.state.list.map(item => {
            return (
            <Paper className="Task-list">
              <li key={item.id}>
              
                <div className="taskItemDetailsContainer">
                  <div className="taskItemDetails"><label> <b> Task Name:</b> </ label>{item.itemValue} </div>
                  <div className="taskItemDetails"><label> <b> Category:</b> </ label> {item.itemCategory}</div>
                  <div className="taskItemDetails"><label><b> Description: </b></ label>{item.itemDescriptionValue} </div>
                  <div className="taskItemDetails"><label> <b>Task Priority:</b> </ label> {item.itemPriorityValue}</div>
                  <div className="taskItemDetails"><label> <b>Due Date:</b> </ label>{item.itemSelectedDate}</div>
                  <Button
                          onClick={() => this.deleteItem(item.id)}
                          variant="contained"
                          color="primary"
                          className={classes.deleteButton}
                          align="right"
                          >x</Button>
                </div>
                
              </li>
          </Paper>            
            );
          })}
        </ul>
        </Grid>

        {/*Task Download Button*/}
              {/* <ExcelFile element={<Button
                                  // onClick={() => this.handleExport()}
                                  variant="contained"
                                  color="primary"
                                  className={classes.downloadButton}
                                  align="centre"
                                >
                                 Download Tasklist
                                </Button>}>
                <ExcelSheet data={this.state.list} name="Tasklist">
                    <ExcelColumn label="Task Name" value="itemValue"/>
                    <ExcelColumn label="Task Category" value="itemCategory"/>
                    <ExcelColumn label="Task Description" value="itemDescriptionValue"/>
                    <ExcelColumn label="Task Priority" value="itemPriorityValue"/>
                    <ExcelColumn label="Due Date" value="itemSelectedDate"/>
                </ExcelSheet>
            </ExcelFile> */}
      </div>
    );
  }
}

export default withStyles(styles)(TaskPage);
