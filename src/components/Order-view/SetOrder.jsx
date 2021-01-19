import React, { useEffect, useState } from 'react';
import OrderList from './OrderList';
import Product from './Product';
import db from '../../firebase/initialization-firebase';

const SetOrder = (props) => {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);

  function selectProduct(item) {
    const existProduct = order.findIndex((el) => el.id === item.id);
    // eslint-disable-next-line no-param-reassign
    item.quantity = 1;
    if (existProduct !== -1) {
      setOrder(
        order.map((obj) => (obj.id === item.id ? { ...obj, quantity: obj.quantity + 1 } : obj)),
      );
    } else {
      setOrder([...order, item]);
    }
  }

  const totalOrder = order.reduce(
    (acc, selectedProduct) => (acc + selectedProduct.price * selectedProduct.quantity, 0),
  );

  const countProduct = () => {

  };
  const onDeleteOrderList = (index) => {
    const temporaryArray = [...order];
    temporaryArray.splice(index, 1);
    setOrder(temporaryArray);
  };
  useEffect(() => {
    db.collection('items').where('menu', '==', props.typeFood).get()
      .then((queryResults) => {
        const arrayMenu = [];
        queryResults.forEach((doc) => {
          arrayMenu.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setMenu(arrayMenu);
      });
  }, [props.typeFood]);

  const cleanOrder = () => {
    setOrder([]);
  };

  return (
    <>
      <ul className="display-list-product">
        {menu.map((item, index) => (
          <Product
            key={`m${index}`}
            itemProduct={item}
            selectProduct={selectProduct}
            countProduct={countProduct}
          />
        ))}
      </ul>

      <ul className="display-list-order">
        <div className="each-list-order">
          {order.map((item, index) => (
            <OrderList
              key={`o${index}`}
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
            props.addOrder(order);
            props.cleanInput();
            cleanOrder();
          }}
        >
          Tomar pedido
        </button>
      </ul>
    </>
  );
};
export default SetOrder;
