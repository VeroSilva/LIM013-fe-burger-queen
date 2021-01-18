import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = (props) => {

    return (
      <header>
        <a href="/">
          <img src="https://user-images.githubusercontent.com/68167686/103605203-4e1c0780-4ee1-11eb-8c96-0d1379f88bf5.png" alt=""></img>
        </a>
        <div className="directions-links">
          <Link to={{
            pathname:'/waiter',
            state: props.nroNotifications,
          }}>Waiter</Link>
          <Link to="/kitchen">Kitchen</Link>
        </div>
      </header>
    )
}