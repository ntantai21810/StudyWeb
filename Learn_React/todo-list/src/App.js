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
    this.addTask = this.addTask.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  componentDidMount() {
    this.setState({
      tasks: JSON.parse(localStorage.getItem("tasks")),
    });
  }

  addTask() {
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

  render() {
    const { tasks, isDisplayForm } = this.state;
    return (
      <div className="container mt-3">
        <h1 className="text-center mb-3">To do list</h1>
        <div className="row">
          {isDisplayForm ? (
            <div className="col-4">
              <TaskForm closeForm={this.closeForm} />
            </div>
          ) : (
            ""
          )}
          <div className={isDisplayForm ? "col-8" : "col-12"}>
            <button className="btn btn-primary" onClick={this.addTask}>
              <i class="fas fa-plus mr-3"></i>Add task
            </button>
            <TaskControl />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
