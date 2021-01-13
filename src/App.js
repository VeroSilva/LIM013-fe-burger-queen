import React,{ useState } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { db } from './firebase/initialization-firebase';
import { Kitchen } from './components/Pages/Kitchen';
import { OrderView } from './components/Pages/OrderView';
import { Navbar } from './components/Navbar';

export const App = () => {

  const [nroNotifications, setNroNotifications] = useState([]);

   const onNotificationChange = (newNotification) => {
     setNroNotifications(nroNotifications.concat(newNotification));
   };
   const initialStateValues = {
    client: '',
    table: '',
  };
  const [values, setValues] = useState(initialStateValues);

  const cleanInput=()=>{
    setValues({...initialStateValues});
  }
  const handleInput=(data)=>{
    console.log(data);
    const {name, value} = data;
    setValues({...values, [name]: value});
  }
  const addOrder = (order) => {
    const itemsOrder = order.map((element) => {
      return element['description'];
    });
    if(values===initialStateValues || itemsOrder.length===0){
      alert("Termine de completar para registrar su orden")
    }else{
      db.collection('orders').doc().set({
        client:values.client,
        table:values.table,
        time:new Date().toLocaleTimeString(),
        endTime:null,
        items:itemsOrder,
        status:'Pending',
      });
    }

  };

  return (
    <Router>
      <Navbar nroNotifications={nroNotifications}/>

      <Switch>
        {/* <Route path="/restaurant" component={Menu} /> */}
          {/* <Menu /> */}
        {/* </Route> */}
        <Route path="/waiter">
          <OrderView addOrder={addOrder} handleInputChange={handleInput} resetInput={values} cleanInput={cleanInput}/>
        </Route>
        <Route path="/kitchen">
          <Kitchen onNotificationChange={onNotificationChange}/>
        </Route>
      </Switch>
    </Router>
  );
}

