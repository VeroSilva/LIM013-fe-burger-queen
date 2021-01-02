import React, { useState } from 'react';
import { db } from '../firebase';

import { Kitchen } from './kitchen'
import { OrderView } from './orderView';

export const Restaurant = () => {
  
  const [listOrder, setListOrder] = useState([]);

  const addOrder = (orders) => {
    // setListOrder([...listOrder, {item: orders, date: new Date()}]);
    // console.log(orders);
    // orders.map((order,index) => {
      db.collection('orders').doc().set({
        time:new Date(),
        order:orders,
        status:'Pending',
        
        
      });

    // setListOrder([...listOrder, {item: order, date: new Date()}]);
    
    
  };
  console.log(listOrder);

  return (
    <div>
      <OrderView addOrder={addOrder}/>
      <Kitchen/>
    </div>
  )
};

// {props.listOrder.map((order, index) => <div key={index}>
// <h1>Pedido {index + 1 }: </h1>
// <ul>
//   {order.item.map((element, index)=> <li key={index + Math.random()}>{element.description}</li>)}
// </ul>