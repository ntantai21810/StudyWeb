import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Messages from "../constants/Message";

class CartContainer extends React.Component {
  render() {
    let { cart } = this.props;
    return (
      <Cart>
        {this.showAllCartItem(cart)}
        <CartResult cart={cart} />
      </Cart>
    );
  }

  showAllCartItem = (cart) => {
    let result =
      cart.length > 0 ? (
        cart.map((item, index) => {
          return <CartItem key={index} item={item} />;
        })
      ) : (
        <tr>
          <th>{Messages.MSG_CART_EMPTY}</th>
        </tr>
      );
    return result;
  };
}

CartContainer.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
  })
).isRequired;

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(CartContainer);
