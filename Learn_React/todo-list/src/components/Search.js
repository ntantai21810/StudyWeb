import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            name="name"
            value={this.state.name}
            placeholder="Search task"
            onChange={this.handleChange}
          />
          <button
            className="btn btn-primary d-flex align-items-center"
            onClick={() => this.props.searchTask(this.state.name)}
          >
            <i className="fas fa-search-plus mr-3"></i>Search
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTask: (keyword) => {
      dispatch(actions.searchTask(keyword));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
