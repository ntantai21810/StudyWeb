import React from "react";
import { NavLink, Route } from "react-router-dom";
import Product from "./Product";

class Products extends React.Component {
  render() {
    let products = [
      {
        id: 1,
        name: "Iphone 7 plus",
        slug: "iphone",
        price: 1000,
      },
      {
        id: 2,
        name: "Samsung note 20",
        slug: "samsung",
        price: 1500,
      },
      {
        id: 3,
        name: "Xiaomi redmi note 4",
        slug: "xiaomi",
        price: 500,
      },
    ];
    let { match } = this.props;
    return (
      <div>
        <ul className="list-group row text-center">
          {products.map((item, index) => (
            <NavLink to={`${match.url}/${item.slug}`} key={index}>
              <li className="list-group-item">
                {item.id} - {item.name} - {item.price}
              </li>
            </NavLink>
          ))}
        </ul>
        <div className="row">
          <Route exact path="/products/:name" component={Product} />
        </div>
      </div>
    );
  }
}

export default Products;
