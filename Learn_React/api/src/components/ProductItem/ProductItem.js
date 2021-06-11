import React from "react";

class ProductItem extends React.Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>1</td>
        <td>Iphone 6 plus</td>
        <td>500</td>
        <td className="text-around">
          <span className="badge bg-primary">Primary</span>
        </td>
        <td>
          <button type="button" className="btn btn-primary">
            Update
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
