
import React,{useState} from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { db } from '../firebase';

import { Kitchen } from './kitchen'
import { OrderView } from './orderView';
import {Menu} from './navbar';

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
    <main>
      <header>
        <img src="https://user-images.githubusercontent.com/68167686/103605203-4e1c0780-4ee1-11eb-8c96-0d1379f88bf5.png" alt=""/>
      </header>
      <Switch>
        <Route path="/restaurant">
          <Menu/>
        </Route>
        <Route path="/waiter">
          <OrderView addOrder={addOrder} />
        </Route>
          <Route path="/kitchen">
          <Kitchen/>
          </Route>
      </Switch>
</main>


  )
};

// {props.listOrder.map((order, index) => <div key={index}>
// <h1>Pedido {index + 1 }: </h1>
// <ul>
//   {order.item.map((element, index)=> <li key={index + Math.random()}>{element.description}</li>)}
// </ul>