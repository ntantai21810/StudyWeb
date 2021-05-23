import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

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

  componentDidMount() {
    if (this.props.editingTask) {
      this.setState({
        taskName: this.props.editingTask.name,
        status: this.props.editingTask.status,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editingTask) {
      this.setState({
        taskName: nextProps.editingTask.name,
        status: nextProps.editingTask.status,
      });
    } else
      this.setState({
        taskName: "",
        status: false,
      });
  }

  addTask() {
    this.props.onAddTask(this.state);
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
          {this.props.editingTask ? "Update task" : "Add task"}
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
            <i className="fas fa-plus mr-3"></i>
            {this.props.editingTask ? "Update" : "Add"}
          </button>
          <button className="btn btn-danger" onClick={this.cancelAddTask}>
            <i className="fas fa-times mr-3"></i>Clear
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task));
    },
    closeForm: () => {
      dispatch(actions.closeForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
