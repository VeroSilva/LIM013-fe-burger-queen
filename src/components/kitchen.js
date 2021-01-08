import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import Modal from 'react-modal';
import '../styles/kitchen.css';
Modal.setAppElement('#root');

export const Kitchen = (props) => {

  const [showOrder, setShowOrder] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idActive, setidActive] = useState();

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
            onClick = {()=>{
              setidActive(order.id);
              setModalIsOpen(true);
            }}>
            {order.status}
          </button>
        </div>
      )}
      <Modal
        className="Modal"
        overlayClassName="Overlay"
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>¿This order is done?</h2>
        <div className="buttons-modal">
          <button onClick={() => setModalIsOpen(false)}>Close</button>
          <button onClick={() => {
            changeStatus(idActive);
            setModalIsOpen(false);
          }}>Done</button>
        </div>
      </Modal>
    </section>
  )
};
