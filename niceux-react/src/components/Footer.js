import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
	<footer className="blue page-footer">
	  <div className="container">
	    <div className="row">
	      <div className="col l6 s12">
	        <h5 className="white-text">NiceUX</h5>
	        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
	      </div>
	      <div className="col l4 offset-l2 s12">
	        <h5 className="white-text">Links</h5>
	        <ul>
	          <li><Link className="grey-text text-lighten-3" to="/">Home</Link></li>
	          <li><Link className="grey-text text-lighten-3" to="/about">About</Link></li>
	          <li><Link className="grey-text text-lighten-3" to="/work">Work</Link></li>
	          <li><Link className="grey-text text-lighten-3" to="/contact">Contact</Link></li>
	        </ul>
	      </div>
	    </div>
	  </div>
	  <div className="footer-copyright">
	    <div className="container">
	    © 2018 Copyright NiceUX L.L.C.
	    </div>
	  </div>
	</footer>
);

export default Footer;