import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            id="searchTask"
            placeholder="Search task"
          />
          <button className="btn btn-primary d-flex align-items-center">
            <i className="fas fa-search-plus mr-3"></i>Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
