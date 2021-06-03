import React from "react";
import Product from "./Product";
import { connect } from "react-redux";

class Products extends React.Component {
  render() {
    let { products } = this.props;
    let allProducts = products.map((product, index) => (
      <Product key={index} product={product} />
    ));
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">{allProducts}</div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Products);
