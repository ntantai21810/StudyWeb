import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    let { tasks } = this.props;
    if (this.state.filterName) {
      tasks = tasks.filter(
        (task) =>
          task.name
            .toLowerCase()
            .indexOf(this.state.filterName.toLowerCase()) !== -1
      );
    }
    tasks = tasks.filter((task) => {
      if (!this.state.filterStatus) return true;
      else
        return (
          task.status === (this.state.filterStatus === "done" ? true : false)
        );
    });
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
                placeholder="Filter task"
                name="filterName"
                onChange={this.handleChange}
                value={this.state.filterName}
              />
            </td>
            <td>
              <select
                className="form-control"
                id="status"
                name="filterStatus"
                onChange={this.handleChange}
              >
                <option value="">All</option>
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
