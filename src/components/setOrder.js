import React from 'react';
import { TotalOrder } from './totalOrder';
import { Product } from './product';
import { db } from '../firebase' ;

export const SetOrder = (props) => {
  
  console.log(props);
  if (props.menuType === "desayuno"){
    const data = db.collection('items').where("menu", "==", "desayuno").get();
    data.then( function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
    });
  };

  return (
    <div>
      <h1>Taking order</h1>
      <Product />
      <TotalOrder />
    </div>
  )
};