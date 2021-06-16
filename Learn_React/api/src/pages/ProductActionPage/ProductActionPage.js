import React from "react";
import "./ProductActionPage.css";
import callAPI from "../../utils/callAPI";
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
      callAPI(`products/${id}`, "GET").then((res) => {
        let data = res.data;
        this.setState({
          id: data.id,
          name: data.name,
          price: data.price,
          status: data.status,
        });
      });
    }
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
      callAPI(`products/${id}`, "PUT", {
        name: name,
        price: price,
        status: status,
      }).then((res) => this.props.history.goBack());
    } else {
      callAPI("products", "POST", {
        name: name,
        price: price,
        status: status,
      }).then((res) => this.props.history.goBack());
    }
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

export default ProductActionPage;
