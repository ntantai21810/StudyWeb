import React from "react";

class Reset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 15,
    };
  }
  render() {
    return (
      <button
        className="btn btn-primary mt-2"
        style={{ display: "inline-block" }}
        onClick={() =>
          this.props.setDefault(this.state.color, this.state.fontSize)
        }
      >
        Reset
      </button>
    );
  }
}

export default Reset;
