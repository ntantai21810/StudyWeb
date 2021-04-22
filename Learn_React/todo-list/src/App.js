import React from "react";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      editingTask: null,
      filterName: "",
    };
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.openAddForm = this.openAddForm.bind(this);
    this.searchTask = this.searchTask.bind(this);
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      this.setState({
        tasks: JSON.parse(localStorage.getItem("tasks")),
      });
    } else
      this.setState({
        tasks: [],
      });
  }

  openForm() {
    if (!this.state.isDisplayForm)
      this.setState({
        isDisplayForm: true,
      });
  }

  openAddForm() {
    if (!this.state.isDisplayForm || this.state.editingTask) {
      this.setState({
        isDisplayForm: true,
        editingTask: null,
      });
    }
  }

  closeForm() {
    if (this.state.isDisplayForm) {
      this.setState({
        isDisplayForm: false,
        editingTask: null,
      });
    }
  }

  submitForm(taskName, status) {
    let { tasks } = this.state;

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

    //Add task
    else if (taskName) {
      tasks.push({
        id:
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15),
        name: taskName,
        status: status,
      });
    }
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }

  updateStatus(index) {
    let { tasks } = this.state;
    tasks[index].status = !tasks[index].status;
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }

  deleteTask(index) {
    let { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }

  updateTask(index) {
    let { tasks } = this.state;
    this.setState({
      editingTask: tasks[index],
    });
    this.openForm();
  }

  searchTask(name) {
    this.setState({
      filterName: name,
    });
  }

  render() {
    let { tasks, isDisplayForm, filterName } = this.state;
    if (filterName) {
      tasks = tasks.filter(
        (task) =>
          task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
      );
    }
    return (
      <div className="container mt-3">
        <h1 className="text-center mb-3">To do list</h1>
        <div className="row">
          {isDisplayForm ? (
            <div className="col-4">
              <TaskForm
                closeForm={this.closeForm}
                submitForm={this.submitForm}
                editingTask={this.state.editingTask}
              />
            </div>
          ) : (
            ""
          )}
          <div className={isDisplayForm ? "col-8" : "col-12"}>
            <button className="btn btn-primary" onClick={this.openAddForm}>
              <i className="fas fa-plus mr-3"></i>Add task
            </button>
            <TaskControl searchTask={this.searchTask} />
            <TaskList
              tasks={tasks}
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

export default App;
