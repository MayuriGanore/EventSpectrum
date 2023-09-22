import React, { Component } from "react";
import logo from "../Images/logo.png";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#7f1717' }}>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} className="logo" alt="EventSpectrum Logo" />
              <span className="text">EventSpectrum</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                <li className="nav-item">
                  <a className="nav-link" href="/" style={{ color: '#fff', fontSize:'20px',fontFamily:'sans-serif' }}>
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" style={{ color: '#fff' ,fontSize:'20px', fontFamily:'sans-serif'}}>
                    Organisers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" style={{ color: '#fff' ,fontSize:'20px',fontFamily:'sans-serif' }}>
                    Contact Us 
                  </a>
                </li>
              </ul>
            </div>

            <div className="right-content" style={{ justifyContent: 'space-between' }}>
              <button className="btn btn-primary" style={{ marginRight: '20px',width:'100px' }}>Login</button>
              <button className="btn btn-primary" style={{ marginRight: '20px',width:'100px' }}>Sign Up</button>
            </div>
          </div>
        </nav>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search any desired event here" aria-label="Search"/>
        <button class="btn btn-primary" type="submit" style={{borderRadius:'20px', width:'200px'}}><b style={{fontSize:'20px',fontFamily:'sans-serif'}}>Search</b></button>
      </form>
      </div>
    );
  }
}

export default Navbar;
