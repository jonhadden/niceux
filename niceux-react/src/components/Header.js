import React from 'react';
import { Link } from 'react-router-dom';

import './../styles/header.scss';

const Header = () => (
	<header className="header">
		<ul>
			<li><a href="tel:16512104614">+1 (651) 210-4614</a></li>
			<li><a href="mailto:jon@niceux.com">jon@niceux.com</a></li>
			<li><a href="http://www.linkedin.com/in/jonhadden">linkedin.com/in/jonhadden</a></li>
			<li><a href="https://github.com/jonhadden/">github.com/jonhadden</a></li>
		</ul>
		<nav>
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo">NiceUX</Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><Link to="/case-studies">Case Studies</Link></li>
					<li><Link to="/Articles">Articles</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
		</nav>
	</header>
);

export default Header;