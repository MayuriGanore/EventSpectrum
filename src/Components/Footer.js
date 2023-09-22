import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <a href='/' style={{fontSize:'20px',color:'blue'}}>Subscribe Us</a>
        </div>
        <ul className='social-icons' style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ display: 'inline-block', marginRight: '10px' }}>
            <a href='/'><i className='fa fa-facebook fa-2x'></i></a>
          </li>
          <li style={{ display: 'inline-block', marginRight: '10px' }}>
            <a href='/'><i className='fa fa-twitter fa-2x'></i></a>
          </li>
          <li style={{ display: 'inline-block', marginRight: '10px' }}>
            <a href='/'><i className='fa fa-instagram fa-2x'></i></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
