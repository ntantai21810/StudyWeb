import React from "react";

class Product extends React.Component {
  render() {
    return <div>This is Product page - {this.props.match.params.name}</div>;
  }
}

export default Product;
