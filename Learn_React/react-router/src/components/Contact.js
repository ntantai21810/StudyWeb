import React from "react";
import { Prompt } from "react-router-dom";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  onClick = (isChecked) => {
    this.setState({
      isChecked: isChecked,
    });
  };

  render() {
    return (
      <div>
        This is Contact page <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.onClick(false)}
        >
          Allow
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.onClick(true)}
        >
          Deny
        </button>
        <Prompt
          when={this.state.isChecked}
          message={(location) => `Do you want to go to ${location.pathname}`}
        />
      </div>
    );
  }
}

export default Contact;
