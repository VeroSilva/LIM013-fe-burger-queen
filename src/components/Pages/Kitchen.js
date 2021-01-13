import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import '../../styles/kitchen.css';
import { db } from '../../firebase/initialization-firebase';
import { getOrder } from '../../firebase/functions-firestore';
Modal.setAppElement('#root');

export const Kitchen = (props) => {

  const [showOrder, setShowOrder] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idActive, setidActive] = useState();

  useEffect(()=>{
    const unsubscribe = ()=>{
      getOrder((data)=>{
      setShowOrder(data);
    });
    }
  //Cuando ya no necesites escuchar los datos, debes desvincular el agente de escucha para que 
  //dejen de hacerse solicitudes a las devoluciones de llamada de eventos. Esto permite al cliente 
  //dejar de usar ancho de banda para recibir actualizaciones.
  //Unsubscribe() isn’t a function because what is returned from database is not a function. Call a function in return for cleanup. 
  //Have a function that does the clean up and call it.
    console.log(unsubscribe());
    return () => unsubscribe();
    
  }, []);
  //Usage with Firestore Realtime Database:
// This is useful when using Firestore Realtime Database:

// useEffect(() => {
//     //Subscribe: firebase channel
//     const cleanUp = firebase.firestore().collection('photos') .doc(id)
//         .onSnapshot( doc => {
//             setLoading(false);
//             setPhotos(doc)
//         }, err => { setError(err); }
//     );
//     return () => cleanUp(); //Unsubscribe
//  }, []);
// If you forgot to clean your firestore subscription, you may receive unnecessary requests.

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
