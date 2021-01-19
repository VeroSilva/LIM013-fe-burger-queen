import React from 'react';

const Product = (props) => (
  <li
    className="item-product"
    onClick={() => {
      (props.selectProduct(props.itemProduct));
    }}
  >
    <p className="item-name">
      {props.itemProduct.description}
    </p>
    <p className="item-price">
      S/.
      {props.itemProduct.price}
    </p>
    <img className="item-img" src={props.itemProduct.photo} alt="img-product" />
  </li>
);
export default Product;
