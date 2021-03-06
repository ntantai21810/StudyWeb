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
    let { tasks, searchTask } = this.props;
    let { filterName, filterStatus } = this.props.filter;
    let { sortBy, asc } = this.props.sortTask;

    //Search
    if (searchTask) {
      tasks = tasks.filter(
        (task) =>
          task.taskName.toLowerCase().indexOf(searchTask.toLowerCase()) !== -1
      );
    }

    //Filter
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

    //Sort
    if (sortBy === "name") {
      if (asc)
        tasks.sort((a, b) =>
          a.taskName > b.taskName ? 1 : a.taskName < b.taskName ? -1 : 0
        );
      else
        tasks.sort((a, b) =>
          a.taskName < b.taskName ? 1 : a.taskName > b.taskName ? -1 : 0
        );
    }
    if (sortBy === "status") {
      if (asc)
        tasks.sort((a, b) =>
          a.status > b.status ? -1 : a.status < b.status ? 1 : 0
        );
      else
        tasks.sort((a, b) =>
          a.status < b.status ? -1 : a.status > b.status ? 1 : 0
        );
    }

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
    searchTask: state.searchTask,
    sortTask: state.sortTask,
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
