import React, { useEffect, useState } from 'react';
import { TotalOrder } from './totalOrder';
import { Product } from './product';
import {db} from '../firebase'

export const SetOrder = (props) => {
const [menu,setMenu]=useState([]);
const [order, setOrder] = useState([]);

useEffect(()=>{
    db.collection('items').where('menu','==',props.typeFood).get()
    .then((querySnapshot)=>{
      const arrayDocs=[]
      querySnapshot.forEach((doc)=>{

        arrayDocs.push(doc.data());
        console.log(arrayDocs)
      })
      setMenu(arrayDocs)
    })
  },[props.typeFood])

  return (
    <div>
      <ul>
      {menu.map((item,index)=>
      <Product key={'x'+index} item={item}/>)}
      </ul>


      <h1>Taking order</h1>
      
      <TotalOrder />
    </div>
  )
};