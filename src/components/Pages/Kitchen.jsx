import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Moment from 'react-moment';
import Modal from 'react-modal';
import '../../styles/kitchen.css';
import getData from '../../firebase/functions-firestore';

Modal.setAppElement('#root');

const Kitchen = (props) => {
  const [showOrder, setShowOrder] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idActive, setidActive] = useState();

  useEffect(() => {
    let unmounted = false;

    getData.getOrder((data) => {
      if (!unmounted) {
        setShowOrder(data);
      }
    });

    return () => { unmounted = true; };
  }, []);

  const changeStatus = (id) => {
    getData.updateOrder(id);
    const newDone = [id];
    props.onNotificationChange(newDone);
  };

  return (
    <section className="kitchen-section">
      {showOrder.map((order, index) => (
        <div key={order.id} className="orders">
          <div className="order-number">
            <p>
              Nro.
              {index + 1}
            </p>
          </div>
          <div className="detailes-order">
            <p>{order.table}</p>
            {order.endTime === null ? ''
              : (
                <p className="timer">
                  <Moment from={moment(order.endTime, 'hh:mm:ss')}>
                    {moment(order.time, 'hh:mm:ss')}
                  </Moment>
                </p>
              )}
            {/* {order.endTime===null?'':<p className="timer">
            {(moment(order.endTime,"hh:mm:ss").diff(moment(order.time,"hh:mm:ss"),
            'seconds'))}s</p>} */}
            <p>
              {new Date(order.time.seconds * 1000).getHours()}
              :
              {new Date(order.time.seconds * 1000).getMinutes()}
              :
              {new Date(order.time.seconds * 1000).getSeconds()}
            </p>
          </div>
          <ul className="items-order">
            {order.items.map((element) => (
              <li className="items-order-detail" key={element.id}>
                <p>{element.quantity}</p>
                <p>{element.product}</p>
              </li>
            ))}

          </ul>
          <button
            type="button"
            className={order.status}
            onClick={() => {
              setidActive(order.id);
              setModalIsOpen(true);
            }}
          >
            {order.status}
          </button>
        </div>
      ))}
      <Modal
        className="Modal"
        overlayClassName="Overlay"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>¿This order is done?</h2>
        <div className="buttons-modal">
          <button
            type="button"
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              changeStatus(idActive);
              setModalIsOpen(false);
            }}
          >
            Done
          </button>
        </div>
      </Modal>
    </section>
  );
};

Kitchen.propTypes = {
  onNotificationChange: PropTypes.string.isRequired,
};

export default Kitchen;
