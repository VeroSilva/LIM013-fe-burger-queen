import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import '../styles/kitchen.css';

export const Kitchen = (props) => {
  const [showOrder, setShowOrder] = useState([]);

  useEffect(()=>{
    db.collection('orders').orderBy('time').onSnapshot((doc) => {
      const arrayMenu =[]
      doc.forEach((el)=>{
        arrayMenu.push({
          id:el.id,
          ...el.data()
        });
      })
      setShowOrder(arrayMenu);
    })
  }, []);

  const changeStatus = (id) => {
    db.collection('orders').doc(id).update({
      status: "Done",
    });
  };

  // const changeClassName = (e) => {
  //   e.target.classList.add("order-done");
  // };

  return (
    <section className="kitchen-section">
      {showOrder.map((order,index)=>
        <div key={order.id} className="orders">
          <div className="detailes-order">
            <p>Nro. {index+1}</p>
            <p>{order.time}</p>
          </div>
          <ul className="items-order">
            {order.items.map((element,index)=>
            <li key={'o'+index}>{element}</li>)}
          </ul>
          <button
            className = {order.status}
            onClick = { ()=>{
              changeStatus(order.id);
            }}>
            {order.status}
          </button>
        </div>
      )}
    </section>
  )
};

