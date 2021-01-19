import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import OrderList from './OrderList';
import Product from './Product';
import getData from '../../firebase/functions-firestore';

const SetOrder = (props) => {
  const { typeFood, addOrder, cleanInput } = props;

  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);

  function selectProduct(item) {
    const existProduct = order.findIndex((el) => el.id === item.id);
    if (existProduct !== -1) {
      setOrder(
        order.map((obj) => (obj.id
          === item.id ? { ...obj, quantity: obj.quantity + 1 } : obj)),
      );
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  }

  const totalOrder = order.reduce(
    (acc, selectedProduct) => acc + (selectedProduct.price * selectedProduct.quantity), 0,
  );

  const onDeleteOrderList = (index) => {
    const temporaryArray = [...order];
    temporaryArray.splice(index, 1);
    setOrder(temporaryArray);
  };

  useEffect(() => {
    getData.getMenu(props.typeFood).then((newMenu) => {
      setMenu(newMenu);
    });
  }, [typeFood]);

  const cleanOrder = () => {
    setOrder([]);
  };

  return (
    <>
      <ul className="display-list-product">
        {menu.map((item) => (
          <Product
            key={item.id}
            itemProduct={item}
            selectProduct={selectProduct}
          />
        ))}
      </ul>

      <ul className="display-list-order">
        <div className="each-list-order">
          {order.map((item, index) => (
            <OrderList
              key={item.id}
              itemProduct={item}
              onDelete={() => onDeleteOrderList(index)}
            />
          ))}
        </div>
        <div className="price-total">
          Total S/.
          {totalOrder}
        </div>
        <button
          type="button"
          className="button"
          onClick={() => {
            addOrder(order);
            cleanInput();
            cleanOrder();
          }}
        >
          Tomar pedido
        </button>
      </ul>
    </>
  );
};

SetOrder.propTypes = {
  typeFood: PropTypes.string.isRequired,
  addOrder: PropTypes.func.isRequired,
  cleanInput: PropTypes.func.isRequired,
};

export default SetOrder;
