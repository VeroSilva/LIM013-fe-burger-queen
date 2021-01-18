import React, { useEffect, useState } from 'react';
import { OrderList } from './OrderList';
import { Product } from './Product';
import { db } from '../../firebase/initialization-firebase';

export const SetOrder = (props) => {
  
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);

  const selectProduct = (item) => {
    setOrder([...order, item]);
  }
  const totalOrder=order.reduce((acc,menu)=>acc+menu.price,0);
  
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
      setMenu(arrayMenu)
    })
  },[props.typeFood]);

  const cleanOrder = () => {
    setOrder([]);
  };

  return (
    <>
      <ul className='display-list-product'>
        {menu.map((item, index) => <Product key = {'m'+ index} itemProduct = {item}  selectProduct={selectProduct} />)}
      </ul>

      <ul className="display-list-order">
        <div className="each-list-order">
          {order.map((item, index) => <OrderList key = {'o'+ index} itemProduct = {item} onDelete={()=>onDeleteOrderList(index)}/>)}
        </div>
        <div className="price-total">Total S/. {totalOrder}</div>
        <button 
          className ='button' 
          onClick={() => {
            props.addOrder(order);
            props.cleanInput();
            cleanOrder();
          }}
        >Tomar pedido</button>
      </ul>
    </>
  )
};