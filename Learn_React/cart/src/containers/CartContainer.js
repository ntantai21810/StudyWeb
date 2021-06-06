import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Messages from "../constants/Message";
import * as actions from "../actions/index";

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
          return (
            <CartItem
              key={index}
              item={item}
              deleteProduct={this.props.deleteProduct}
              changeMessage={this.props.changeMessage}
              changeQuantityOfProduct={this.props.changeQuantityOfProduct}
            />
          );
        })
      ) : (
        <tr>
          <th>{Messages.MSG_CART_EMPTY}</th>
        </tr>
      );
    return result;
  };
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
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
  ).isRequired,
  deleteProduct: PropTypes.func.isRequired,
  changeMessage: PropTypes.func.isRequired,
  changeQuantityOfProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product) => {
      dispatch(actions.deleteProduct(product));
    },
    changeMessage: (message) => {
      dispatch(actions.changeMessage(message));
    },
    changeQuantityOfProduct: (product, quantity) => {
      dispatch(actions.changeQuantityOfProduct(product, quantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
