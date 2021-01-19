import React, { useState } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Home from './components/Pages/Home';
import Kitchen from './components/Pages/Kitchen';
import OrderView from './components/Pages/OrderView';
import Navbar from './components/Navbar';
import getData from './firebase/functions-firestore';

const App = () => {
  const [nroNotifications, setNroNotifications] = useState([]);

  const onNotificationChange = (newNotification) => {
    setNroNotifications(nroNotifications.concat(newNotification));
  };
  const initialStateValues = {
    client: '',
    table: '',
  };
  const [values, setValues] = useState(initialStateValues);

  const cleanInput = () => {
    setValues({ ...initialStateValues });
  };

  const handleInput = (data) => {
    const { name, value } = data;
    setValues({ ...values, [name]: value });
  };

  const addOrder = (order) => {
    const itemsOrder = order.map((element) => {
      const newObj = {};
      newObj.product = element.description;
      newObj.quantity = element.quantity;
      return newObj;
    });

    if (values === initialStateValues || itemsOrder.length === 0) {
      // eslint-disable-next-line no-alert
      alert('Termine de completar para registrar su orden');
    } else {
      getData.createOrder(itemsOrder, values);
    }
  };

  return (
    <Router>
      <Navbar nroNotifications={nroNotifications} />

      <Switch>
        <Route path="/waiter">
          <OrderView
            addOrder={addOrder}
            handleInputChange={handleInput}
            resetInput={values}
            cleanInput={cleanInput}
          />
        </Route>
        <Route path="/kitchen">
          <Kitchen onNotificationChange={onNotificationChange} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
