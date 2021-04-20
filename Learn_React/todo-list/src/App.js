import React from "react";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  componentDidMount() {
    this.setState({
      tasks: JSON.parse(localStorage.getItem("tasks")),
    });
  }
  render() {
    const { tasks } = this.state;
    return (
      <div className="container mt-3">
        <h1 className="text-center mb-3">To do list</h1>
        <div className="row">
          <div className="col-4">
            <TaskForm />
          </div>
          <div className="col-8">
            <button className="btn btn-primary">
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
