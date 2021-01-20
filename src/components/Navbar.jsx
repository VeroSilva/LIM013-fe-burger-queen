import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

const Navbar = (props) => {
  const { nroNotifications } = props;

  return (
    <header>
      <a href="/">
        <img src="https://user-images.githubusercontent.com/68167686/103605203-4e1c0780-4ee1-11eb-8c96-0d1379f88bf5.png" alt="" />
      </a>
      <nav className="directions-links">
        <ul>
          <li>
            <NavLink
              to={{
                pathname: '/waiter',
                state: nroNotifications,
              }}
              activeClassName="active"
            >
              Waiter
            </NavLink>
          </li>
          <li>
            <NavLink to="/kitchen" activeClassName="active" key={window.location.pathname}>Kitchen</NavLink>
          </li>
          <li>
            <NavLink to="/delivery" activeClassName="active" key={window.location.pathname}>Delivery</NavLink>
          </li>
        </ul>

      </nav>
    </header>
  );
};

Navbar.propTypes = {
  nroNotifications: PropTypes.number.isRequired,
};

export default Navbar;
