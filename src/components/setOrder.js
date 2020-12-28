import React, { useEffect, useState } from 'react';

import { TotalOrder } from './totalOrder';
import { Product } from './product';
import {db} from '../firebase'

export const SetOrder = (props) => {
  
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);

  const selectProduct = (item) => {
    setOrder([...order, item]);
    console.log(order);
  }

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
  console.log(menu);
  return (
    <div>

      <h1>Taking order</h1>

      <ul>
      {menu.map((item, index) => <Product key = {'m'+ index} itemProduct = {item}  selectProduct={selectProduct} />)}
      </ul>

      <ul>
      {order.map((item, index) => <Product key = {'o'+ index} itemProduct = {item} />)}
      </ul>
      <TotalOrder />
    </div>
  )
};