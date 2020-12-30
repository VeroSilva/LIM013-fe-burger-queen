import React, { useState, useEffect } from 'react';
import {KitchenOrder} from './kitchenOrder'
export const Kitchen = (props) => {

  return (
    <div>
      {props.showOrder.map((item, index) => <KitchenOrder key = {'ko'+ index} showOrder={item} />)}
    </div>
  )
};