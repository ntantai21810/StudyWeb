import React from "react";
import Products from "../components/Products";
import Product from "../components/Product";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../actions/index";

class ProductsContainer extends React.Component {
  render() {
    let { products } = this.props;
    let allProducts = products.map((product, index) => (
      <Product key={index} product={product} addToCart={this.props.addToCart} />
    ));
    return <Products products={products}>{allProducts}</Products>;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(actions.addToCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
