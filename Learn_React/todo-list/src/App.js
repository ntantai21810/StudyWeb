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
    };
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
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
        isDisplayForm: !this.state.isDisplayForm,
      });
  }

  closeForm() {
    if (this.state.isDisplayForm) {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
      });
    }
  }

  addTask(taskName, status) {
    if (taskName) {
      const { tasks } = this.state;
      tasks.push({
        id:
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15),
        name: taskName,
        status: status,
      });
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  }

  updateStatus(index) {
    let { tasks } = this.state;
    tasks[index].status = !tasks[index].status;
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }

  render() {
    const { tasks, isDisplayForm } = this.state;
    return (
      <div className="container mt-3">
        <h1 className="text-center mb-3">To do list</h1>
        <div className="row">
          {isDisplayForm ? (
            <div className="col-4">
              <TaskForm closeForm={this.closeForm} addTask={this.addTask} />
            </div>
          ) : (
            ""
          )}
          <div className={isDisplayForm ? "col-8" : "col-12"}>
            <button className="btn btn-primary" onClick={this.openForm}>
              <i className="fas fa-plus mr-3"></i>Add task
            </button>
            <TaskControl />
            <TaskList tasks={tasks} updateStatus={this.updateStatus} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
