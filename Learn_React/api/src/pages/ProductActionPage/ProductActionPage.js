import React from "react";
import "./ProductActionPage.css";

class ProductActionPage extends React.Component {
  render() {
    return (
      <div className="row">
        <form className="col-6">
          <div className="form-group">
            <label>Product name: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label>Product Price: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter price"
            />
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Stocking</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
