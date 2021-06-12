import React from "react";

class ProductItem extends React.Component {
  render() {
    let { product, index } = this.props;
    let productStatus = product.status ? "Stocking" : "Sold out";
    let statusClass = product.status ? "primary" : "danger";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td className="text-around">
          <span className={`badge bg-${statusClass}`}>{productStatus}</span>
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
