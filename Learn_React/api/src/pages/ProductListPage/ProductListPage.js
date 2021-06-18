import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from "../../actions/index";

class ProductListPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    let { products } = this.props;
    return (
      <div>
        <Link to="/products/add" className="btn btn-primary mt-3">
          Add product
        </Link>
        {/* Products */}
        <ProductList>{this.showProduct(products)}</ProductList>
      </div>
    );
  }

  showProduct = (products) =>
    products.map((product, index) => (
      <ProductItem
        key={index}
        index={index}
        product={product}
        deleteProduct={() => this.props.deleteProduct(product.id)}
      />
    ));
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(Actions.fetchProductsRequest());
    },
    deleteProduct: (id) => {
      dispatch(Actions.deleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
