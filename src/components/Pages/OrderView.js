import React, { useState } from 'react';
import { SetInfo } from '../Order-view/InfoClient';
import { SetOrder } from '../Order-view/SetOrder';
import '../../styles/orderView.css';
import { useLocation } from "react-router-dom";

export const OrderView = (props) => {

  const location = useLocation();

  const [typeFood, setTypeFood] = useState('desayuno');


  console.log('this is our location: ', location);

  return(
    <section className="order-view-section">      
      <div className='btn-section'>
          <button className="button menu" onClick={()=>{setTypeFood('desayuno')}}>Desayuno</button>
          <button className="button menu" onClick={()=>{setTypeFood('almuerzo y cena')}}>Almuerzo y cena</button>
      </div>
      <div className='notifications'>
        <label>{location.state.length}</label>
        <span className="material-icons notification-order-done">
          notifications
        </span>
      </div>
      <SetInfo handleInputChange={props.handleInputChange} resetInput={props.resetInput}/>
      <SetOrder typeFood={typeFood} addOrder={props.addOrder} cleanInput={props.cleanInput}/>
    </section>
  )
}