import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";

class ProductListPage extends React.Component {
  render() {
    let products = [];
    return (
      <div>
        <button className="btn btn-primary mt-3">Add product</button>
        {/* Products */}
        <ProductList>{this.showProduct(products)}</ProductList>
      </div>
    );
  }

  showProduct = (products) =>
    products.map((product, index) => (
      <ProductItem key={index} index={index} product={product} />
    ));
}

export default ProductListPage;
