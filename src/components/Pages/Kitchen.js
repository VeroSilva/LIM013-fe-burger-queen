import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import '../../styles/kitchen.css';
import { db } from '../../firebase/initialization-firebase';
import { getData } from '../../firebase/functions-firestore';
Modal.setAppElement('#root');

export const Kitchen = (props) => {

  const [showOrder, setShowOrder] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idActive, setidActive] = useState();

  useEffect(()=>{
    let unmounted = false;
    
    getData.getOrder((data)=> {
      if(!unmounted){
        setShowOrder(data)
      }
    });

    return () => { unmounted = true };
  }, []);

  const changeStatus = (id) => {

    db.collection('orders').doc(id).update({
      endTime:new Date().toLocaleTimeString(),
      status: "Done",
    });
    const newDone = [id];
    props.onNotificationChange(newDone);
  };

  return (
    <section className="kitchen-section">
      {showOrder.map((order,index)=>
        <div key={order.id} className="orders">
          <div className="order-number">
            <p>Nro. {index+1}</p>
          </div>
          <div className="detailes-order">
            <p>{order.table}</p>
            {order.endTime===null?'':<p className="timer">{(moment(order.endTime,"hh:mm:ss").diff(moment(order.time,"hh:mm:ss"),'seconds'))}s</p>}
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
