import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
// import { Kitchen } from './kitchen';
import { OrderView } from './orderView';

export const Restaurant = () => {

  const addOrder = (order) => {
    const itemsOrder = order.map((element) => {
      return element['description'];
    });

    db.collection('ordersTest').doc().set({
        status: 'Pending',
        pedido: itemsOrder,
        date: new Date(),
    });
    
  };

  return (
    <div>
      <OrderView addOrder={addOrder}/>
    </div>
  )
};

// const [listOrder, setListOrder] = useState([]);
// setListOrder([...listOrder, {item: order, date: new Date()}]);