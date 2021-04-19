import React from "react";
import "./ColorPicker.css";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "yellow"],
    };
  }
  render() {
    const colorElements = this.state.colors.map((color, index) => (
      <span
        key={index}
        style={{ backgroundColor: color }}
        className={this.props.color === color ? "active" : ""}
        onClick={() => this.props.setAppColor(color)}
      ></span>
    ));
    return (
      <div>
        <div className="card">
          <div className="card-header">Color ColorPicker</div>
          <div className="card-body">{colorElements}</div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
