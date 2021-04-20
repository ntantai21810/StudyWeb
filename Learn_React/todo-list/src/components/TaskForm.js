import React from "react";

class TaskForm extends React.Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header">Add Task</h5>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="inputTask">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputTask"
              placeholder="Enter task"
            />
            <div className="form-group mt-2">
              <label htmlFor="status">Status</label>
              <select className="form-control" id="status">
                <option value="done">Done</option>
                <option value="working">Working</option>
              </select>
            </div>
          </div>
        </div>
        <div className="task-control d-flex justify-content-around mb-3">
          <button className="btn btn-primary">
            <i class="fas fa-plus mr-3"></i>Add
          </button>
          <button className="btn btn-danger">
            <i class="fas fa-times mr-3"></i>Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default TaskForm;
