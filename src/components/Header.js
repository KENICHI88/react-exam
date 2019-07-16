import React from 'react';
import {Link} from 'react-router-dom';
const Header = React.memo(props => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="index.html">Start Bootstrap</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" >Homepage</Link>
            </li>
            <li className="nav-item">
              <Link to="/history" >History</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default Header;