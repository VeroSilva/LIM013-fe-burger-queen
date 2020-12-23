import React, { useState, useEffect } from 'react';
import { TotalOrder } from './totalOrder';
import { Product } from './product';
import {db} from '../firebase'

export const SetOrder = (props) => {
  
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    db.collection('items').where('menu','==', props.typeFood).get()
    .then((queryResults)=>{
      const arrayMenu =[]
      queryResults.forEach((doc)=>{arrayMenu.push(doc.data());
      })
      console.log(arrayMenu)
      setMenu(arrayMenu)
    })
  },[props.typeFood])

  return (
    <div>
      <h1>Taking order</h1>
      <ul>
      {menu.map((item, index) => <Product key = {'x'+ index} item = {item}/>)}
      </ul>

      <TotalOrder />
    </div>
  )
};