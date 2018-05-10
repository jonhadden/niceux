import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<nav className="blue darken-1">
		<div className="container nav-wrapper">
			<Link to="/" className="brand-logo">NiceUX</Link>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><Link to="/about">About</Link></li>
				<li><Link to="/work">Work</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
		</div>
	</nav>
);

export default Header;