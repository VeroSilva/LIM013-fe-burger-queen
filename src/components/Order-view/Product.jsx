import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  const { selectProduct, itemProduct } = props;

  return (
    <div
      className="item-product"
      onClick={() => (selectProduct(itemProduct))}
      aria-hidden="true"
      role="button"
      tabIndex={0}
    >
      <p className="item-name">
        {itemProduct.description}
      </p>
      <p className="item-price">
        S/.
        {itemProduct.price}
      </p>
      <img className="item-img" src={itemProduct.photo} alt="img-product" />
    </div>
  );
};

Product.propTypes = {
  selectProduct: PropTypes.func.isRequired,
  itemProduct: PropTypes.shape.isRequired,
};

export default Product;
