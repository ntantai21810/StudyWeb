import React from "react";
import "./StylePicker.css";

class SizePicker extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            Size Picker: {this.props.size + "px"}
          </div>
          <div className="card-body">
            <button
              className="btn btn-primary"
              onClick={() => this.props.setAppFontSize(this.props.size + 2)}
            >
              Increase
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.props.setAppFontSize(this.props.size - 2)}
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SizePicker;
