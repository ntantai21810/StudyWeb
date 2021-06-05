import React from "react";

class CartResult extends React.Component {
  render() {
    let { cart } = this.props;
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.calculateTolTalPrice(cart)}$</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Complete purchase
            <i className="fa fa-angle-right right"></i>
          </button>
        </td>
      </tr>
    );
  }

  calculateTolTalPrice = (cart) => {
    return cart.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };
}

export default CartResult;
