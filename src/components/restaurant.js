import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    <Router>
      <div>
      <nav className ='Buttons'>
        <ul>
          <li><Link to="/waiter">Waiter</Link></li>
          <li><Link to="/kitchen">Kitchen</Link></li>
        </ul>

      </nav>
      <Switch>
          <Route path="/waiter">
            <OrderView addOrder={saveOrder}/>
          </Route>
          <Route path="/kitchen">
            <Kitchen showOrder={order}/>
          </Route>

        </Switch>

      
      
      </div>
    </Router>

  )
};