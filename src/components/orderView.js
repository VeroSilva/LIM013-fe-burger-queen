import React, { useState } from 'react';
import { InfoClient } from './infoClient';
import { SetOrder } from './setOrder';

export const OrderView = () => {

  const initialStateValues = {
    client: '',
    table: '',
  };

  const [currentMenu, setCurrentMenu] = useState('almuerzo y cena');
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
      <button onClick={()=> setCurrentMenu('desayuno')}>Desayuno</button>
      <button onClick={()=> setCurrentMenu('almuerzo y cena')}>Almuerzo y Cena</button>

      <InfoClient infoClient={values}/>
      <SetOrder menuType={currentMenu}/>
    </div>
    
  )
}