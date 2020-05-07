import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="main-header" >
      <h1>React App</h1>
      <Link className="router-link" to="/">Home</Link> | <Link className="router-link" to="/about">About</Link>
    </header>
  )
}



export default Header;