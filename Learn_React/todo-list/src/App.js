import React from "react";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import * as actions from "./actions/index";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
    this.searchTask = this.searchTask.bind(this);
    this.sortTask = this.sortTask.bind(this);
  }

  openForm() {
    this.props.openForm();
  }

  searchTask(name) {
    this.setState({
      filterName: name,
    });
  }

  sortTask(sortBy, sortAsc) {
    this.setState({
      sortBy: sortBy,
      sortAsc: sortAsc,
    });
  }

  render() {
    let { isDisplayForm } = this.props;
    return (
      <div className="container mt-3">
        <h1 className="text-center mb-3">To do list</h1>
        <div className="row">
          {isDisplayForm ? (
            <div className="col-4">
              <TaskForm />
            </div>
          ) : (
            ""
          )}
          <div className={isDisplayForm ? "col-8" : "col-12"}>
            <button className="btn btn-primary" onClick={this.openForm}>
              <i className="fas fa-plus mr-3"></i>Add task
            </button>
            <TaskControl
              searchTask={this.searchTask}
              sortTask={this.sortTask}
            />
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.form,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    openForm: () => {
      dispatch(actions.openForm());
      dispatch(actions.deleteEditingTask());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
