import React,{ useState } from 'react';
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import { db } from '../firebase';
import { Kitchen } from './kitchen'
import { OrderView } from './orderView';
import { Menu } from './navbar';

export const Restaurant = () => {

  const [nroNotifications, setNroNotifications] = useState([]);

   const onNotificationChange = (newNotification) => {
     setNroNotifications(nroNotifications.concat(newNotification));
   };

  const addOrder = (order) => {
    const itemsOrder = order.map((element) => {
      return element['description'];
    });

    db.collection('orders').doc().set({
      time:new Date().toLocaleTimeString(),
      items:itemsOrder,
      status:'Pending',
    });
  };

  console.log(nroNotifications);

  return (
    <Router>
      <header>
        <img src="https://user-images.githubusercontent.com/68167686/103605203-4e1c0780-4ee1-11eb-8c96-0d1379f88bf5.png" alt=""/>
        <div class="directions-links">
          <Link to={{
            pathname:'/waiter',
            state: nroNotifications,
          }}>Waiter</Link>
          <Link to="/kitchen">Kitchen</Link>
        </div>
      </header>
      <Switch>
        <Route path="/restaurant">
          <Menu />
        </Route>
        <Route path="/waiter">
          <OrderView addOrder={addOrder} />
        </Route>
        <Route path="/kitchen">
          <Kitchen onNotificationChange={onNotificationChange}/>
        </Route>
      </Switch>
    </Router>
  )
};

// {props.listOrder.map((order, index) => <div key={index}>
// <h1>Pedido {index + 1 }: </h1>
// <ul>
//   {order.item.map((element, index)=> <li key={index + Math.random()}>{element.description}</li>)}
// </ul>