import React, { useState, useEffect } from 'react';
import { KitchenOrder } from './kitchenOrder';
import { db } from '../firebase';

export const Kitchen = (props) => {
const [showOrder, setShowOrder] = useState([]);
  // let items =  props.orderList[index].items;
  
  useEffect(()=>{
    db.collection('orders').onSnapshot((doc) => {
      const arrayMenu =[]
      doc.forEach((el)=>{
        arrayMenu.push({
          id:el.id,
          ...el.data()
        });
      })
      setShowOrder(arrayMenu)
    })
    
  }, []);
console.log(showOrder);
  return (
    <div>
      {showOrder.map((order,index)=>
        <ul key={order.id}>
          <p>Pedido Nro.{index+1}</p>
          <p>Status:{order.status}</p>
          <p>Tiempo</p>
          <p>Detalle de Pedido</p>
          {order.order.map((element,index)=>
          <p key={'o'+index}>{element.description}</p>)}
        </ul>

      )}
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

