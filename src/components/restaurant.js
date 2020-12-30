import React, { useState, useEffect } from 'react';

import { Kitchen } from './kitchen'
import { OrderView } from './orderView';

export const Restaurant = () => {
  
  const [listOrder, setListOrder] = useState([]);

  const addOrder = (order) => {
    setListOrder([...listOrder, {item: order, date: new Date()}]);
  };

  return (
    <div>
      <OrderView addOrder={addOrder}/>
      <Kitchen listOrder={listOrder}/>
    </div>
  )
};