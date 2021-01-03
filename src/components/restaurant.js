
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Kitchen } from './kitchen'
import { OrderView } from './orderView';

export const Restaurant = () => {

  
  const addOrder = (order) => {
    const itemsOrder = order.map((element) => {
      return element['description'];
    });

    db.collection('orders').doc().set({
      time:new Date().toLocaleString(),
      items:itemsOrder,
      status:'Pending',
    });
  };

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