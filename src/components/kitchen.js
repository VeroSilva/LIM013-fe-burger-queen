import React, { useState, useEffect } from 'react';
import { KitchenOrder } from './kitchenOrder';

export const Kitchen = (props) => {

  // let items =  props.orderList[index].items;

  return (
    <div>
      {props.listOrder.map((order, index) => <div key={index}>
        <h1>Pedido {index + 1 }: </h1>
        <ul>
          {order.item.map((element, index)=> <li key={index + Math.random()}>{element.description}</li>)}
        </ul>
        <label>Estado</label>
      </div>
      )}
    </div>
  )
};

