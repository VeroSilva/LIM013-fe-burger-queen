import React, { useEffect, useState } from 'react';


import {OrderList} from './orderList.js'
import { Product } from './product';
import {db} from '../firebase'

export const SetOrder = (props) => {
  
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);

  const selectProduct = (item) => {
    setOrder([...order, item]);
    console.log(order);
  }
  const totalOrder=order.reduce((acc,menu)=>acc+menu.price,0)
  console.log(totalOrder);
  
  const onDeleteOrderList=(index)=>{
    let temporaryArray = [...order];
    temporaryArray.splice(index,1);
    setOrder(temporaryArray);
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
      <h1> order</h1>
      <ul>
      {order.map((item, index) => <OrderList key = {'o'+ index} itemProduct = {item} onDelete={()=>onDeleteOrderList(index)}/>)}
      </ul>

      <div className='totalPrice'>
          <div >Total S/. {totalOrder}</div>
          <button className ='button' onClick={() => props.addOrder(order)}>Tomar pedido</button>
        </div>


    
    </div>
  )
};