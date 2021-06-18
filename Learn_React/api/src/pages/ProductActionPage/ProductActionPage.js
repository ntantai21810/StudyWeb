import React from "react";
import "./ProductActionPage.css";
import * as Actions from "../../actions/index";
import { connect } from "react-redux";
class ProductActionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      status: false,
    };
  }

  componentDidMount() {
    if (this.props.match) {
      let id = this.props.match.params.id;
      this.props.getProduct(id);
    }
  }

  componentWillReceiveProps(props) {
    if (props.editingProduct) this.setState(props.editingProduct);
  }

  onChange = (e) => {
    let name = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let { id, name, price, status } = this.state;
    if (id) {
      this.props.updateProduct(this.state);
    } else {
      this.props.addProduct({
        name,
        price,
        status,
      });
    }
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="row">
        <form className="col-6" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Product name: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Product Price: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter price"
              name="price"
              value={this.state.price}
              onChange={this.onChange}
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="status"
              checked={this.state.status}
              onChange={this.onChange}
            />
            <label className="form-check-label">Stocking</label>
          </div>
          <button type="submit" className="btn btn-primary">
            {this.state.id ? "Update" : "Save"}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editingProduct: state.editingProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(Actions.addProductRequest(product));
    },
    getProduct: (id) => {
      dispatch(Actions.getProductRequest(id));
    },
    updateProduct: (product) => {
      dispatch(Actions.updateProductRequest(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
