import React from "react";

class Sort extends React.Component {
  handleChange = (e) => {
    let sortBy = e.target.value.split("-")[0];
    let sortAsc = e.target.value.split("-")[1] === "Asc" ? true : false;
    this.props.sortTask(sortBy, sortAsc);
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

export default Sort;
