import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import callAPI from "../../utils/callAPI";
import { Link } from "react-router-dom";
import * as Actions from "../../actions/index";

class ProductListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    callAPI("products")
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteProduct = (id) => {
    callAPI(`products/${id}`, "DELETE", null).then((res) => {
      if (res.status === 200) {
        let products = this.state.products.filter(
          (product) => product.id !== id
        );
        this.setState({
          products: products,
        });
      }
    });
  };

  render() {
    // let { products } = this.props;
    let products = this.state.products;

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
        deleteProduct={this.deleteProduct}
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
      dispatch(Actions.fetchProducts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
