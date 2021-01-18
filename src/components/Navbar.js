import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/App.css'
export const Navbar = (props) => {

    return (
      <header>
        <a href="/">
          <img src="https://user-images.githubusercontent.com/68167686/103605203-4e1c0780-4ee1-11eb-8c96-0d1379f88bf5.png" alt=""></img>
        </a>
        <nav className="directions-links">
          <ul>
            <li>
            <NavLink to={{
            pathname:'/waiter',
            state: props.nroNotifications,
          }}
          activeClassName="active">Waiter</NavLink>
            </li>
            <li>
              <NavLink to="/kitchen" activeClassName="active">Kitchen</NavLink>
            </li>


          </ul>

        </nav>
      </header>
    )
}