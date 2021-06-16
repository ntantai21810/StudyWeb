import React from "react";
import { Link } from "react-router-dom";

class ProductItem extends React.Component {
  deleteProduct = (id) => {
    this.props.deleteProduct(id);
  };

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
          <Link to={`products/${product.id}/edit`} className="btn btn-primary">
            Update
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.deleteProduct(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
