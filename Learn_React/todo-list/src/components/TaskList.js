import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  render() {
    const { tasks } = this.props;
    const taskItems = tasks.map((item, index) => (
      <TaskItem
        task={item}
        index={index}
        key={item.id}
        updateStatus={this.props.updateStatus}
        deleteTask={this.props.deleteTask}
        updateTask={this.props.updateTask}
      />
    ));
    return (
      <table className="table table-bordered bg-light">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <td>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Filter task"
              />
            </td>
            <td>
              <select className="form-control" id="status">
                <option value="done">Done</option>
                <option value="working">Working</option>
              </select>
            </td>
            <td></td>
          </tr>
          {taskItems}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
