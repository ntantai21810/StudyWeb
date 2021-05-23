import React from "react";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { conenct, connect } from "react-redux";
import * as actions from "./actions/index";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayForm: false,
      editingTask: null,
      filterName: "",
      sortBy: "",
      sortAsc: true,
    };
    this.openForm = this.openForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.openAddForm = this.openAddForm.bind(this);
    this.searchTask = this.searchTask.bind(this);
    this.sortTask = this.sortTask.bind(this);
  }

  openForm() {
    if (!this.state.isDisplayForm)
      this.setState({
        isDisplayForm: true,
      });
  }

  openAddForm() {
    // if (!this.state.isDisplayForm || this.state.editingTask) {
    //   this.setState({
    //     isDisplayForm: true,
    //     editingTask: null,
    //   });
    // }
    this.props.openForm();
  }

  submitForm(taskName, status) {
    let tasks = [...this.state.tasks];

    //Update task
    if (this.state.editingTask) {
      for (let task of tasks) {
        if (task.id === this.state.editingTask.id) {
          task.name = taskName;
          task.status = status;
          break;
        }
      }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  updateStatus(index) {
    let tasks = [...this.state.tasks];
    tasks[index].status = !tasks[index].status;
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  deleteTask(index) {
    let tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  updateTask(index) {
    let tasks = [...this.state.tasks];
    this.setState({
      editingTask: tasks[index],
    });
    this.openForm();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  searchTask(name) {
    this.setState({
      filterName: name,
    });
  }

  sortTask(sortBy, sortAsc) {
    this.setState({
      sortBy: sortBy,
      sortAsc: sortAsc,
    });
  }

  render() {
    let { filterName, sortBy, sortAsc } = this.state;
    let { isDisplayForm } = this.props;
    // if (filterName) {
    //   tasks = tasks.filter(
    //     (task) =>
    //       task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    //   );
    // }
    // if (sortBy) {
    //   if (sortBy === "name") sortAsc = !sortAsc;
    //   tasks.sort((task1, task2) => {
    //     let check = task1[sortBy] > task2[sortBy];
    //     return check === sortAsc ? -1 : 1;
    //   });
    // }
    return (
      <div className="container mt-3">
        <h1 className="text-center mb-3">To do list</h1>
        <div className="row">
          {isDisplayForm ? (
            <div className="col-4">
              <TaskForm editingTask={this.state.editingTask} />
            </div>
          ) : (
            ""
          )}
          <div className={isDisplayForm ? "col-8" : "col-12"}>
            <button className="btn btn-primary" onClick={this.openAddForm}>
              <i className="fas fa-plus mr-3"></i>Add task
            </button>
            <TaskControl
              searchTask={this.searchTask}
              sortTask={this.sortTask}
            />
            <TaskList
              updateStatus={this.updateStatus}
              deleteTask={this.deleteTask}
              updateTask={this.updateTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.form,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    openForm: () => {
      dispatch(actions.openForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
