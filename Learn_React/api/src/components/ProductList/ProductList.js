import React from "react";
import ProductItem from "../ProductItem/ProductItem";

class ProductList extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h2 className="mb-3 mt-3">Product list</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No.</th>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
