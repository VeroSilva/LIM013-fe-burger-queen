import React, { useState } from 'react';
import { InfoClient } from './infoClient';
import { SetOrder } from './setOrder';

export const OrderView = () => {

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
    <div>
      <h1>Order View</h1>
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
      <InfoClient infoClient={values}/>

      <div>
        <button onClick={()=>{setTypeFood('desayuno')}}>Desayuno</button>
        <button onClick={()=>{setTypeFood('almuerzo y cena')}}>Almuerzo y cena</button>
      </div>

      <SetOrder typeFood={typeFood}/>

    </div>
    
  )
}