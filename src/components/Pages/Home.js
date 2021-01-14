import React from 'react';
import { Link } from "react-router-dom";
export const Home = () => {

  return (
    <div className="home-view">
      <h1>¿Quién eres?</h1>
      <div className="routes">
        <Link to="/waiter">Waiter</Link>
        <Link to="/kitchen">Kitchen</Link>
      </div>
    </div>
  )
}  