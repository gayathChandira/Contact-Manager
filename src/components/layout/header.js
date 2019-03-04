import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-e py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="fas fa-home" />Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                <i className="fas fa-question" />About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
