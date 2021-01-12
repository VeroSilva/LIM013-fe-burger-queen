import React, { useState } from 'react';
import { InfoClient } from '../Order-view/InfoClient';
import { SetOrder } from '../Order-view/SetOrder';
import '../../styles/orderView.css';
import { useLocation } from "react-router-dom";

export const OrderView = (props) => {

  const location = useLocation();

  const [typeFood, setTypeFood] = useState('desayuno');

  const options = ["Select a table", "A1", "A2", "A3"];

  const initialStateValues = {
    client: '',
    table: '',
  };

  const [values, setValues] = useState(initialStateValues);
 
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }

  console.log('this is our location: ', location);

  return(
    <section className="order-view-section">
      <div className="input-section">
          <input className="input"
          type="text"
          placeholder="Client name"
          name="client"
          onChange={handleInputChange}
          // value={client}
          />
          <select className="select" name="table"
            onChange={handleInputChange}>  

            {options.map(option => {
              return <option value={option} key={option} >{option}</option>})}
          </select>
      </div>
      
      <div className='notifications'>
        <label>{location.state.length}</label>
        <span className="material-icons notification-order-done">
          notifications
        </span>
      </div>
      
      <div className='btn-section'>
          <button className="button menu" onClick={()=>{setTypeFood('desayuno')}}>Desayuno</button>
          <button className="button menu" onClick={()=>{setTypeFood('almuerzo y cena')}}>Almuerzo y cena</button>
      </div>

      <div className='info-section'>
        <InfoClient infoClient={values}/>
      </div>

      <SetOrder typeFood={typeFood} addOrder={props.addOrder}/>
    </section>
  )
}