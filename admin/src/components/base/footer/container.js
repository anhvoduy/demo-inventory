import React from 'react';
import { Grid } from 'react-bootstrap';
import info from '../../../../package.json'

const Footer = function() {
  return (
    <footer className='footer'>
      <Grid fluid>
        <nav className='pull-left'>
          {/* 
            <ul>
              <li>
                <a href='#pablo'>Home</a>
              </li>
              <li>
                <a href='#pablo'>Company</a>
              </li>
              <li>
                <a href='#pablo'>Portfolio</a>
              </li>
              <li>
                <a href='#pablo'>Blog</a>
              </li>
            </ul>
          */}
        </nav>
        <p className='copyright pull-right'>
          {/* <a href='/'>Inventory System</a> */}
          {'Inventory System '} &copy; {new Date().getFullYear()} {` - version: ${info.version}`}
        </p>
      </Grid>
    </footer>
  );  
}

export default Footer;
