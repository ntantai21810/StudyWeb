import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class Sort extends React.Component {
  handleChange = (e) => {
    let sortBy = e.target.value.split("-")[0];
    let asc = e.target.value.split("-")[1] === "Asc" ? true : false;
    this.props.sortTask({
      sortBy,
      asc,
    });
  };

  render() {
    return (
      <select
        className="form-control bg-primary text-light"
        onChange={this.handleChange}
      >
        <option value="">Sort</option>
        <option value="name-Asc">Name A-Z</option>
        <option value="name-Desc">Name Z-A</option>
        <option value="status-Asc">Status - Done</option>
        <option value="status-Desc">Status - Working</option>
      </select>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortTask: (sort) => {
      dispatch(actions.sortTask(sort));
    },
  };
};

export default connect(null, mapDispatchToProps)(Sort);
