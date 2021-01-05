import React, { useState } from 'react';
import { db } from '../firebase';

import { Kitchen } from './kitchen'
import { OrderView } from './orderView';

export const Restaurant = () => {
  
  const addOrder = (order) => {
    const itemsOrder = order.map((element) => {
      return element['description'];
    });

    db.collection('orders').doc().set({
      time:new Date().toLocaleString(),
      items:itemsOrder,
      status:'Pending',
    });
  };

  return (
    <div>
      <OrderView addOrder={addOrder}/>
      <Kitchen />
    </div>
  )
};