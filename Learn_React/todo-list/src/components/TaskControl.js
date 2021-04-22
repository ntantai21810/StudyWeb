import React from "react";
import Search from "./Search";

class TaskControl extends React.Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col-6">
          <Search searchTask={this.props.searchTask} />
        </div>
        <div className="col-2">
          <button className="btn btn-primary">
            Sort<i className="fas fa-sort ml-3"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default TaskControl;
