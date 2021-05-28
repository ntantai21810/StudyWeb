import React from "react";
import Search from "./Search";
import Sort from "./Sort";

class TaskControl extends React.Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col-6">
          <Search />
        </div>
        <div className="col-2">
          <Sort />
        </div>
      </div>
    );
  }
}

export default TaskControl;
