import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.css';

const Home = () => (
  <div className="bg-home">
    <div className="home-view">
      <h1>¿Quién eres?</h1>
      <div className="routes">
        <Link to="/waiter">Mesero</Link>
        <Link to="/kitchen">Cocinero</Link>
      </div>
    </div>
  </div>

);
export default Home;
