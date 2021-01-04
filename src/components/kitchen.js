import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

export const Kitchen = (props) => {
const [showOrder, setShowOrder] = useState([]);
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
          <p>Status: {order.status}</p>
          <p>Tiempo: {order.time}</p>
          <p>Detalle de Pedido</p>
          {order.items.map((element,index)=>
          <li key={'o'+index}>{element}</li>)}
        </ul>
      )}
    </div>
  )
};

