import React from "react";
import * as Messages from "../constants/Message";

class Product extends React.Component {
  render() {
    let { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt={product.name} />
            <a href="https://www.google.com/">
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="https://www.google.com/">{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>{this.showRating(product.rating)}</li>
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                  onClick={() => this.addToCart(product)}
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  addToCart = (product) => {
    this.props.addToCart(product);
    this.props.changeMessage(Messages.MSG_ADD_TO_CART_SUCCESS);
  };

  showRating(rating) {
    let stars = [];
    for (let i = 0; i < rating; i++)
      stars.push(<i className="fa fa-star" key={i}></i>);
    for (let i = 0; i < 5 - rating; i++)
      stars.push(<i className="fa fa-star-o" key={i + 5}></i>);
    return stars;
  }
}

export default Product;
