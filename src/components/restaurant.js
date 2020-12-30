import React, { useState, useEffect } from 'react';

import { Kitchen } from './kitchen'
import { OrderView } from './orderView';

export const Restaurant = () => {
  const initialStateProduct={
    category:'',
    description:'',
    menu:'',
    photo:'',
    price:'',
    productCode:''
  }
  const [order,setOrder]=useState([initialStateProduct])

  const saveOrder=(arr)=>{
    setOrder(arr);
   
  }
  console.log(order);
  return (
    <div>
      <OrderView addOrder={saveOrder}/>
      <Kitchen showOrder={order}/>
    </div>
  )
};