import React, { useState } from 'react';
import { SetInfo } from '../Order-view/InfoClient';
import { SetOrder } from '../Order-view/SetOrder';
import { getData } from '../../firebase/functions-firestore';
import '../../styles/orderView.css';

export const OrderView = (props) => {
  
  const [nroNotifications, setNroNotifications] = useState();
  const [typeFood, setTypeFood] = useState('desayuno');

  const ordersDone = getData.getOrdersDone();
  ordersDone.then((res) => {
    setNroNotifications(res.length);
  });

  return(
    <section className="order-view-section">      
      <div className='btn-section'>
          <button className="button menu" onClick={()=>{setTypeFood('desayuno')}}>Desayuno</button>
          <button className="button menu" onClick={()=>{setTypeFood('almuerzo y cena')}}>Almuerzo y cena</button>
      </div>
      <div className='notifications'>
        <label>{nroNotifications}</label>
        <span className="material-icons notification-order-done">
          notifications
        </span>
      </div>
      <SetInfo handleInputChange={props.handleInputChange} resetInput={props.resetInput}/>
      <SetOrder typeFood={typeFood} addOrder={props.addOrder} cleanInput={props.cleanInput}/>
    </section>
  )
}