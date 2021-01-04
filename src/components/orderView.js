import React, { useState } from 'react';
import { InfoClient } from './infoClient';
import { SetOrder } from './setOrder';
import '../styles/orderView.css'

export const OrderView = (props) => {

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

  return(
    <section className="order-view-section">
      <div className='header'>

          <input
          type="text"
          placeholder="Client name"
          name="client"
          onChange={handleInputChange}
          // value={client}
          />
          <select name="table"
            onChange={handleInputChange}>  

            {options.map(option => {
              return <option value={option} key={option} >{option}</option>})}
          </select>


        <div >
          <button onClick={()=>{setTypeFood('desayuno')}}>Desayuno</button>
          <button onClick={()=>{setTypeFood('almuerzo y cena')}}>Almuerzo y cena</button>
        </div>
      </div>
          <SetOrder typeFood={typeFood} addOrder={props.addOrder}/>
        <div className='header1'>
        <InfoClient infoClient={values}/>
        </div>


      
      

    </section>
    
  )
}