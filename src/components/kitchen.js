import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
// import { KitchenOrder } from './kitchenOrder';

export const Kitchen = () => {

  // useEffect(()=>{
  //   db.collection("ordersTest").doc().get()
  //     .then((querySnapshot) => console.log(querySnapshot))
  // }, []);

//Queda pendiente que al darle click a tomar pedido este consulte e imprima aquí 

  return (
    <div>
      {/* {props.listOrder.map((order, index) => <div key={index}>
        <h1>Pedido {index + 1 }: </h1>
        <ul>
          {order.item.map((element, index)=> <li key={index + Math.random()}>{element.description}</li>)}
        </ul>
        <label>Estado</label>
      </div>
      )} */}
    </div>
  )
};

