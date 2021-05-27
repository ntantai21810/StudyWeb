import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class TaskItem extends React.Component {
  render() {
    const { task } = this.props;
    return (
      <tr>
        <th className="text-center">{this.props.index + 1}</th>
        <td>{task.taskName}</td>
        <td className="text-center">
          {task.status ? (
            <span
              className="badge badge-success p-2"
              style={{ cursor: "pointer" }}
              onClick={() => this.props.updateStatus(this.props.index)}
            >
              Done
            </span>
          ) : (
            <span
              className="badge badge-primary p-2"
              style={{ cursor: "pointer" }}
              onClick={() => this.props.updateStatus(this.props.index)}
            >
              Working
            </span>
          )}
        </td>
        <td className="text-center d-flex justify-content-around">
          <button
            className="btn btn-warning text-white"
            onClick={() => this.props.editingTask(task)}
          >
            <i className="fas fa-pen mr-2"></i>Update
          </button>
          <button
            className="btn btn-danger text-white"
            onClick={() => this.props.deleteTask(this.props.index)}
          >
            <i className="fas fa-trash-alt mr-2"></i>Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateStatus: (index) => {
      dispatch(actions.updateStatus(index));
    },
    deleteTask: (index) => {
      dispatch(actions.deleteTask(index));
      dispatch(actions.closeForm());
    },
    editingTask: (task) => {
      dispatch(actions.openForm());
      dispatch(actions.editingTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
