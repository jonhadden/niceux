import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './../styles/header.scss';

class Header extends Component {

	constructor(props) {
        super(props);
        this.state = {
        	showHideNav: false
        }
    }

    toggleNav() {
	    this.setState(prevState => ({
		  showHideNav: !prevState.showHideNav
		}));
	}

    render() {
        return (
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
						<button 
							type="button"
							className={(this.state.showHideNav === true) ? "hamburger show" : "hamburger"} 
            				onClick={this.toggleNav.bind(this)}>
							<div className="hamburger-box"><div className="hamburger-inner"></div></div>
						</button>
						<ul className={(this.state.showHideNav === true) ? "show" : null}>
							<li><Link to="/case-studies">Case Studies</Link></li>
							<li><Link to="/articles">Articles</Link></li>
							{/*<li><Link to="/contact">Contact</Link></li>*/}
						</ul>
					</div>
				</nav>
			</header>
        )
  	}

};

export default Header;