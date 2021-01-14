import React, { useEffect, useState } from 'react';
import { OrderList } from './OrderList';
import { Product } from './Product';
import { db } from '../../firebase/initialization-firebase';

export const SetOrder = (props) => {
  
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [count,setCount]=useState(1);

  
  const selectProduct = (item) => {
    item.quantity = 0;
    // console.log(item)
    // order.map((product,item)=>{
    //   console.log(product);
    //   console.log(item);
    //   if(product.id===item.id){

    //     setOrder([...order, item]);
    //   }else{
    //     setOrder([...order, item]);
    //   }
      
    // })
    let exitProduct= order.filter(el => el.id === item.id);
    console.log(exitProduct);
    item.quantity = count;
    if(exitProduct.length !==0){
      setCount(count+1);
    }else{
      setOrder([...order, item]);
      
    }
  }
  
  
  const totalOrder=order.reduce((acc,menu)=>acc+menu.price,0);
  const countProduct = () =>{
    
  }
  const onDeleteOrderList=(index)=>{
    let temporaryArray = [...order];
    temporaryArray.splice(index,1);
    setOrder(temporaryArray);
  }
  useEffect(()=>{
    db.collection('items').where('menu','==', props.typeFood).get()
    .then((queryResults)=>{
      const arrayMenu =[]
      queryResults.forEach((doc)=>{
        arrayMenu.push({
          id:doc.id,
          ...doc.data()
        });
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
        {menu.map((item, index) => <Product key = {'m'+ index} itemProduct = {item}  selectProduct={selectProduct} countProduct={countProduct}/>)}
      </ul>

      <ul className="display-list-order">
        <div>
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