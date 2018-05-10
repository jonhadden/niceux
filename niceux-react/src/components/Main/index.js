import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Project from './pages/Project';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Contact from './pages/Contact';

const Main = () => {

  	const timeout = { enter: 300, exit: 200 };

  	return (
		<main className="container">
			<TransitionGroup component="main">
				<CSSTransition timeout={timeout} classNames="fade" appear>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} /> 
						<Route exact path="/work" component={Work} />
						<Route path="/work/:title" component={Project} />
						<Route exact path="/posts" component={Posts} />
						<Route path="/posts/:title" component={Post} />
						<Route path="/contact" component={Contact} />
					</Switch>
				</CSSTransition>
			</TransitionGroup>
		</main>
	);
};

export default Main;