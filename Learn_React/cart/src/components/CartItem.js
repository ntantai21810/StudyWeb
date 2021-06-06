import React from "react";
import * as Messages from "../constants/Message";

class CartItem extends React.Component {
  render() {
    let { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
              onClick={() => this.changeQuantityOfProduct(item.product, -1)}
            >
              <a href="https://www.google.com/">—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
              onClick={() => this.changeQuantityOfProduct(item.product, 1)}
            >
              <a href="https://www.google.com/">+</a>
            </label>
          </div>
        </td>
        <td>{item.product.price * item.quantity}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.deleteProduct(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }

  deleteProduct = (product) => {
    this.props.deleteProduct(product);
    this.props.changeMessage(Messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  };

  changeQuantityOfProduct = (product, quantity) => {
    this.props.changeQuantityOfProduct(product, quantity);
    this.props.changeMessage(Messages.MSG_UPDATE_CART_SUCCESS);
  };
}

export default CartItem;
