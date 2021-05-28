import React from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.filterTask({
      ...this.props.filter,
      [e.target.name]: e.target.value,
    });
  }

  render() {
    let { tasks } = this.props;
    let { filterName, filterStatus } = this.props.filter;
    if (filterName) {
      tasks = tasks.filter(
        (task) =>
          task.taskName.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
      );
    }
    tasks = tasks.filter((task) => {
      if (!filterStatus) return true;
      else return task.status === (filterStatus === "done" ? true : false);
    });
    const taskItems = tasks.map((item, index) => (
      <TaskItem task={item} index={index} key={item.id} />
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
                value={this.props.filter.filterName}
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

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filter: state.filterTask,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterTask: (filter) => {
      dispatch(actions.filterTask(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
