import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfoClient from '../Order-view/InfoClient';
import SetOrder from '../Order-view/SetOrder';
import getData from '../../firebase/functions-firestore';
import '../../styles/orderView.css';

const OrderView = (props) => {
  const {
    handleInputChange, resetInput, addOrder, cleanInput,
  } = props;

  const [nroNotifications, setNroNotifications] = useState();
  const [typeFood, setTypeFood] = useState('desayuno');

  const ordersDone = getData.getOrdersDone();
  ordersDone.then((res) => {
    setNroNotifications(res.length);
  });

  return (
    <section className="order-view-section">
      <div className="btn-section">
        <button type="button" className="button menu" onClick={() => { setTypeFood('desayuno'); }}>Desayuno</button>
        <button
          type="button"
          className="button menu"
          onClick={() => { setTypeFood('almuerzo y cena'); }}
        >
          Almuerzo y cena
        </button>
      </div>
      <div className="notifications">
        <p>{nroNotifications}</p>
        <span className="material-icons notification-order-done">
          notifications
        </span>
      </div>
      <InfoClient handleInputChange={handleInputChange} resetInput={resetInput} />
      <SetOrder typeFood={typeFood} addOrder={addOrder} cleanInput={cleanInput} />
    </section>
  );
};

OrderView.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  resetInput: PropTypes.func.isRequired,
  addOrder: PropTypes.func.isRequired,
  cleanInput: PropTypes.func.isRequired,
};

export default OrderView;
