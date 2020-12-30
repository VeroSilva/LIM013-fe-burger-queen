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

  const [order,setOrder]=useState([])

  const saveOrder=(arr)=>{
    setOrder([...order,arr]);
   
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