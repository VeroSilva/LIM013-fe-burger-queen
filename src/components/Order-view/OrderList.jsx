import React from 'react';
import PropTypes from 'prop-types';

const OrderList = (props) => {
  const { itemProduct, onDelete } = props;

  return (
    <li className="item-order">
      <p className="item-quantity">{itemProduct.quantity}</p>
      <p className="order-name">
        {itemProduct.description}
      </p>
      <p className="order-price">
        S/.
        {itemProduct.price}
      </p>
      <span
        className="material-icons order"
        onClick={() => (onDelete(itemProduct))}
        aria-hidden="true"
        role="button"
        tabIndex={0}
      >
        delete_outline
      </span>
    </li>
  );
};

OrderList.propTypes = {
  itemProduct: PropTypes.shape.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default OrderList;
