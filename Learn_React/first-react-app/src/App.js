import React from "react";
import ColorPicker from "./components/ColorPicker";
import SizePicker from "./components/SizePicker";
import Reset from "./components/Reset";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 18,
    };
    this.setAppColor = this.setAppColor.bind(this);
    this.setAppFontSize = this.setAppFontSize.bind(this);
    this.setDefault = this.setDefault.bind(this);
  }
  setAppColor(newColor) {
    this.setState({
      color: newColor,
    });
  }
  setAppFontSize(newSize) {
    if (newSize >= 8 && newSize <= 32) {
      this.setState({
        fontSize: newSize,
      });
    }
  }
  setDefault(color, size) {
    this.setState({
      color: color,
      fontSize: size,
    });
  }
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-6">
            <ColorPicker
              color={this.state.color}
              setAppColor={this.setAppColor}
            />
          </div>
          <div className="col-6">
            <SizePicker
              size={this.state.fontSize}
              setAppFontSize={this.setAppFontSize}
            />
          </div>
          <div className="col-12">
            <Reset setDefault={this.setDefault} />
          </div>
        </div>
        <div className="row mt-3">
          <h2
            style={{
              color: this.state.color,
              fontSize: this.state.fontSize,
              border: `1px solid ${this.state.color}`,
              padding: 15,
            }}
          >
            This is result !!!
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
