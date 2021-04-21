import React from "react";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      status: false,
    };
    this.addTask = this.addTask.bind(this);
    this.cancelAddTask = this.cancelAddTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTask() {
    this.props.addTask(this.state.taskName, this.state.status);
    this.cancelAddTask();
    this.props.closeForm();
  }

  cancelAddTask() {
    this.setState({
      taskName: "",
      status: false,
    });
  }

  handleChange(e) {
    let value = e.target.value;
    if (e.target.name === "status") value = value === "true" ? true : false;
    this.setState({
      [e.target.name]: value,
    });
  }

  render() {
    return (
      <div className="card">
        <h5 className="card-header d-flex justify-content-between align-items-center">
          Add Task{" "}
          <i
            className="far fa-times-circle"
            style={{ cursor: "pointer" }}
            onClick={this.props.closeForm}
          ></i>
        </h5>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="inputTask">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputTask"
              placeholder="Enter task"
              onChange={this.handleChange}
              value={this.state.taskName}
              name="taskName"
            />
            <div className="form-group mt-2">
              <label htmlFor="status">Status</label>
              <select
                className="form-control"
                id="status"
                onChange={this.handleChange}
                name="status"
                value={this.state.status}
              >
                <option value={true}>Done</option>
                <option value={false}>Working</option>
              </select>
            </div>
          </div>
        </div>
        <div className="task-control d-flex justify-content-around mb-3">
          <button className="btn btn-primary" onClick={this.addTask}>
            <i className="fas fa-plus mr-3"></i>Add
          </button>
          <button className="btn btn-danger" onClick={this.cancelAddTask}>
            <i className="fas fa-times mr-3"></i>Reset
          </button>
        </div>
      </div>
    );
  }
}

export default TaskForm;
