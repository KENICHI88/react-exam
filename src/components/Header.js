import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      isOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind();
  }

  toggleMenu = (status) => {
    let isOpen = !this.state.isOpen;
    if(status !== undefined){
      isOpen = status;
    }
    this.setState({
      isOpen : isOpen
    })
  }

  render(){
    const classButton = !this.state.isOpen ? 'collapsed' : '';
    const classBody = this.state.isOpen ? 'show' : '';

    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <Link className="navbar-brand" onClick={()=>this.toggleMenu(false)} to="/" >Start Bootstrap</Link>
          <button className={`navbar-toggler navbar-toggler-right ${classButton}`} onClick={()=>this.toggleMenu()} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className={`collapse navbar-collapse ${classBody}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link onClick={()=>this.toggleMenu(false)} to="/" >Homepage</Link>
              </li>
              <li className="nav-item">
                <Link onClick={()=>this.toggleMenu(false)} to="/history" >History</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;