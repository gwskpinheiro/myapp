import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/historia">História</Link></li>
        <li><Link to="/fale-conosco">Fale Conosco</Link></li>
        <li><Link to="/galeria">Galeria</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;