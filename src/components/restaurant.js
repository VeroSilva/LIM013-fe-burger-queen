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
import { Navbar } from './navbar';

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
      endTime:null,
      items:itemsOrder,
      status:'Pending',
    });
  };

  return (
    <Router>
      <Navbar nroNotifications={nroNotifications}/>
      <Switch>
        {/* <Route path="/restaurant" component={Menu} /> */}
          {/* <Menu /> */}
        {/* </Route> */}
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